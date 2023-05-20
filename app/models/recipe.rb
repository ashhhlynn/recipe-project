class Recipe < ApplicationRecord
    has_many :reviews
    has_many :recipe_ingredients
    has_many :favorites

    accepts_nested_attributes_for :recipe_ingredients
    validates :description, length: { maximum: 400 }
    validates :name, length: { maximum: 70 }
    validates :recipe_ingredients, length: { minimum: 0, maximum: 6 }
end
