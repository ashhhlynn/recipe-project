class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :created_at
  has_many :reviews
  has_many :recipe_ingredients
end
