class UserSerializer < ActiveModel::Serializer
    attributes :email, :password, :id
    has_many :recipes
    has_many :recipe_ingredients, through: :recipes
    has_many :reviews, through: :recipes

end