Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :destroy] do
      resources :videos, only: [:index]
    end
    get '/identifier', to: 'users#identifier_valid?'


    resource :session, only: [:create, :destroy]

    resources :videos, only: [:create, :show, :destroy] do
      resources :comments, only: [:create]
      resources :likes, only: [:create]
    end
    resources :comments, only: [:destroy]
  end

end
