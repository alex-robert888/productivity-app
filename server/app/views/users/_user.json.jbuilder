json.extract! user, :id, :full_name, :email, :date_of_birth, :country, :city, :username, :password_digest, :created_at, :updated_at
json.url user_url(user, format: :json)
