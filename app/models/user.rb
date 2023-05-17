class User < ApplicationRecord
    has_secure_password
    has_many :favorites

    validates :username, length: { maximum: 50 }
    validates :email, length: { maximum: 50 }

end
