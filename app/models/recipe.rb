class Recipe < ApplicationRecord
    has_many :reviews
    has_many :recipe_ingredients
    belongs_to :user
    
    accepts_nested_attributes_for :recipe_ingredients

    validates :description, length: { maximum: 200 }
    validates :name, length: { maximum: 50 }
    validates :image_url, format: { with: /\.(png|jpg)\Z/i }
end
