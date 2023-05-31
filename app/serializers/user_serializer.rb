class UserSerializer < ActiveModel::Serializer
    attributes :email, :password, :id, :username
    
end