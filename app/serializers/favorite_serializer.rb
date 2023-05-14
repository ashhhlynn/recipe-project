class FavoriteSerializer < ActiveModel::Serializer
    attributes :user_id, :recipe_id
    belongs_to :recipe
  end
  