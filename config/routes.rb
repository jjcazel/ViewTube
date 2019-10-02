Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create, :destroy]
    resource :session, only: [:create, :destroy]

    resources :videos, only: [:create, :show, :index, :destroy] do
      resources :comments, only: [:create, :destroy]
      resources :likes, only: [:create, :destroy]
    end
    
  end

end
