Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :reviews
      resources :users
      resources :recipe_ingredients
      resources :recipes
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
