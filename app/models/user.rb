class User < ApplicationRecord
    has_many :recipes
    has_secure_password
   has_many :favorites
    accepts_nested_attributes_for :recipes

 
end
