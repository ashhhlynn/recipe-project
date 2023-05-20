module Api::V1
class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:show, :destroy]
  skip_before_action :authorize, only: [:index, :show, :destroy]

  # GET /favorites, 
  def index
    @favorites = current_user.favorites
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
      render json: @favorite, status: :created
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