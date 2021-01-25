class ApplicationController < ActionController::API
    before_action :authorized? 
    
    def get_auth_jwt_from_header
        request.headers['Authorization']
    end

    def decode_auth_jwt
        encoded_auth_jwt = get_auth_jwt_from_header
        User.decode_jwt(encoded_auth_jwt)
    end

    def get_authenticated_user
        decoded_auth_jwt = decode_auth_jwt
        User.find(decode_auth_jwt[0]["user_id"])
    end

    def authorized?
        if !(@user = get_authenticated_user)
            render json: {
                status: :unauthorized,
                message: "Unautorized API request! No user logged in currently.."
            } 
        end
    end
end
