class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :name, :recipe_id
  belongs_to :recipe
end
