class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :name, :quantity, :recipe_id
  belongs_to :recipe
end
