Rails.application.routes.draw do
  resources :favorites
  namespace :api do
    namespace :v1 do
      resources :reviews
      resources :users
      resources :recipe_ingredients
      resources :recipes
      resources :ratings

    end
  end
  namespace :api do
    namespace :v1 do
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
    end 
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
