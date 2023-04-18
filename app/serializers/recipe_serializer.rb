class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description
end
