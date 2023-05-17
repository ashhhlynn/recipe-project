class User < ApplicationRecord
    has_many :recipes
    has_secure_password
   has_many :favorites
has_many :recipes, through: :favorites
end
