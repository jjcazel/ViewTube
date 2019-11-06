class ApplicationController < ActionController::Base
    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil 
    end

    def logged_in?
        !!current_user
    end

    def authorized_user?(id=nil)

    # TODO:  this is adding another db query

    unless logged_in?
      render json: ['Requires user to be logged in.'], status: 401
      return false
    end

    if current_user.id != id && id != nil
      render json: ['You are logged in as the wrong user.'], status: 401
      return false
    end

    true

  end
    
end
