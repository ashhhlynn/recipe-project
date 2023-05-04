module Api::V1
    class AuthController < ApplicationController

        def create
            @user = User.find_by(email: user_login_params[:email])
            if @user && @user.authenticate(user_login_params[:password])
              token = encode_token({ user_id: @user.id })
              render json: { user: @user, jwt: token }
            else
                render json: { message: 'Invalid username or password.' }
            end
          end 
            
          private
            
          def user_login_params
              params.require(:user).permit(:email, :username, :password)
          end
            
        end

    end 