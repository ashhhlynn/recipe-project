class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :recipe_id, :created_at, :score
  belongs_to :recipe
end
