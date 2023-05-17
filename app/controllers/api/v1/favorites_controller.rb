module Api::V1
class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:index, :create, :update, :show]

  # GET /favorites, 
  def index
    @favorites = Favorite.all

    render json: @favorites, include: [:recipe]
  end

  # GET /favorites/1
  def show
    render json: @favorite, include: [:recipe]
  end

  # POST /favorites
  def create
    @favorite = Favorite.create(favorite_params)
    @recipe = @favorite.recipe
    if @favorite.valid?
      render json: [@favorite, @recipe], status: :created
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorites/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorites/1
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.require(:favorite).permit(:user_id, :recipe_id, :id)
    end
end

end 