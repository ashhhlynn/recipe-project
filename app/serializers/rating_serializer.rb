class RatingSerializer < ActiveModel::Serializer
  attributes :id, :score, :recipe_id
  belongs_to :recipe

end
