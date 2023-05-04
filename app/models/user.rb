class User < ApplicationRecord
    has_many :recipes
    has_many :reviews
    has_secure_password
end
