class User < ApplicationRecord
    has_many :recipes
    has_many :reviews
    has_secure_password

    validates :username, length: { maximum: 50 }
    validates :username, uniqueness: { case_sensitive: false }
    validates :email, uniqueness: { case_sensitive: false }
end
