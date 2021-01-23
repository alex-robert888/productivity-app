class User < ApplicationRecord
    attr_accessor :remember_token

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    before_save { self.email = email.downcase }

    validates :full_name, presence: true, length: { maximum: 255 }
    validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }
    validates_uniqueness_of :email, :case_sensitive => false
    validates :date_of_birth, presence: true
    validates :country, presence: true
    validates :city, presence: true
    validates :username, presence: true, length: { maximum: 50 }
    validates :password, presence: true, length: { minimum: 6 }
    validates :password_confirmation, presence: true, length: { minimum: 6 }
    
    has_secure_password
    
    def self.get_digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
        BCrypt::Password.create(string, cost: cost)
    end

    def self.encode_jwt(payload)
        JWT.encode(payload, 'secret')
    end

    def self.decode_jwt(jwt)
        JWT.decode(jwt, 'secret', true, algorithm: 'HS256')
    end
end