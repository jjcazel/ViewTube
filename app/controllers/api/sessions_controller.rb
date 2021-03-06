class Api::SessionsController < ApplicationController
  

  #login
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
      )
    if @user
      login!(@user)
      render :show
    else
      render json: ['Password is invalid. You changed your password today!'], status: 404
    end
  end

  #logout
  def destroy
    if current_user  
      logout!
      render json: {}
    else 
      # render json: [message: 'no user logged in!'], status: 404
      render json: 'no user logged in!' , status: 404
    end
  end

  
end
