class User < ApplicationRecord
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

    has_secure_password
end
