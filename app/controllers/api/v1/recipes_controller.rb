module Api::V1
class RecipesController < ApplicationController

  skip_before_action :authorized, only: [:index, :create, :update, :show]


  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes, include: [:reviews, :recipe_ingredients, :ratings]
  end

  # GET /recipes/1
  def show
    @recipe = Recipe.find(params[:id])

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
    recipe = Recipe.find(params[:id])
    if recipe.update(recipe_params)
      render json: recipe
    else
      render json: recipe.errors, status: :unprocessable_entity
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