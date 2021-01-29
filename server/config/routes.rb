Rails.application.routes.draw do
  get '/users/authenticated', to: "users#show"
  patch '/users/authenticated', to:"users#update"
  delete '/users/authenticated', to: "users#destroy"
  resources :users, only: [:index, :create]

  resources :sessions, only: [:create]
end
