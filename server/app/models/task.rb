class Task < ApplicationRecord
    validates :user_id, presence: true
    validates :title, presence: true, length: { maximum: 300 }
    validates :duration, numericality: { greater_than: 0 }
end
