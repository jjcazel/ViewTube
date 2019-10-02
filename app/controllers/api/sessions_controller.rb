class Api::SessionsController < ApplicationController
  
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login!(user)
    # render json?
    else
    # render json[errors] ['please try again']
      render :new
    end
  end

  def destroy
    logout!
    # render json
  end


  
end
