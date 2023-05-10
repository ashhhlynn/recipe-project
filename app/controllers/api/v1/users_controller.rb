module Api::V1
  class UsersController < ApplicationController

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  def profile
    render json: {  user: current_user }, status: :accepted
end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.create(user_params)

    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: @user, jwt: @token }
  else
      render json: { message: 'Failed to create user. Please try again.' }, status: :unprocessable_entity
  end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :id, :email, :password, :password_confirmation)
    end
end
end