Rails.application.routes.draw do
  resources :users
  resources :sessions, only: [:index, :create, :show, :destroy]
end
