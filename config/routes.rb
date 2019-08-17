Rails.application.routes.draw do
  devise_for :users

  namespace :admin do
    resources :users, only: [:index]
  end

  root to: "home#index"
end
