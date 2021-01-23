Rails.application.routes.draw do
  patch '/users/*jwt', to:"users#update_jwt", constraints: { jwt: /.*/ }
  resources :users

  resources :sessions, only: [:index, :create, :show, :destroy]
  post '/sessions/jwt', to: "sessions#create_by_jwt"
end
