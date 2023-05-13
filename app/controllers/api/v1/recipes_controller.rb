module Api::V1
class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]

  skip_before_action :authorized, only: [:index, :create, :update, :show]


  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes, include: [:reviews, :recipe_ingredients]
  end

  # GET /recipes/1
  def show

    render json: @recipe, include: [:reviews, :recipe_ingredients]
  end

  # POST /recipes
  def create
    @recipe = Recipe.create(recipe_params)
    if params[:recipe_ingredients]
    params[:recipe_ingredients].each do |ri|
      RecipeIngredient.create(recipe_id: @recipe.id, name: ri)
    end 
  end 
    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe, include: [:reviews, :recipe_ingredients]
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def recipe_params
      params.require(:recipe).permit(:average, :name, :user_id, :image_url, :description, :recipe_ingredients => [:recipe_id, :name])
    end
end
end