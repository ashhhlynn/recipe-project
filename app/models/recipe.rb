class Recipe < ApplicationRecord
    has_many :reviews
    has_many :ratings
    has_many :recipe_ingredients
    accepts_nested_attributes_for :recipe_ingredients
end
