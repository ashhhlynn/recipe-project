class Recipe < ApplicationRecord
    has_many :reviews
    has_many :recipe_ingredients
    belongs_to :user
    accepts_nested_attributes_for :recipe_ingredients
    has_many :favorites

end
