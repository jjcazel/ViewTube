class Api::UsersController < ApplicationController
    

    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def identifier_valid?
        @user = User.find_by(email: params[:identifier][:identifier])
        # @phone = User.find_by(phone: params[:identifier])
        if @user 
            render json: {identifier: true}
        else
            # debugger
            render json: {identifier: false}
        end
    end


  private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :password, :email, :image_url)
    end
  
end
