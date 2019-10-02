class Api::UsersController < ApplicationController
    

    def show

    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def identifier
        @email = email.find_by(params[identifier])
        @phone = phone.find_by(params[identifier])
        if @email || @phone
            render json: {identifier: true}
        else
            # render json: errors.full_messages
        end
    end


  private

    def user_params
        params.require(:user).permit(:username, :password, :email, :image_url)
    end
  
end
