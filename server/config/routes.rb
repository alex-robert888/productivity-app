Rails.application.routes.draw do
  resources :users

  resources :sessions, only: [:index, :create, :show, :destroy]
  post '/sessions/jwt', to: "sessions#create_by_jwt"
end
