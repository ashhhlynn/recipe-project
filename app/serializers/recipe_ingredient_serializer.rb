class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :recipe_id
  belongs_to :recipe
end
