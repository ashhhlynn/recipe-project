module Api::V1
  class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:index, :create]

  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)

    if @review.save


      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end


  end

  # PATCH/PUT /reviews/1
 

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:text, :recipe_id, :score)
    end
end
end