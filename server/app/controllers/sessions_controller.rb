class SessionsController < ApplicationController
    def index
        # pass
    end

    def show
        # pass
    end

    def create
        @user = User
                .find_by(email: get_parameters[:email].downcase)
                .try(:authenticate, get_parameters[:password]) 

        if @user
            log_in!(@user)
            jwt_payload = {
                id: @user.id
            }
            render json: {
                status: 201,
                message: "Successfully created new user session.",
                user: @user,
                jwt: encode_jwt(jwt_payload)
            }
        else
            render json: { 
                status: 201, # unauthorized requests
                message: "Failed to create new user session."
            }
        end
    end

    def create_by_jwt
        jwt = self.get_jwt[:jwt]
        decoded_jwt = decode_jwt(jwt)

        @user = User.find_by(id: decoded_jwt[0]["user_id"])
        
        if @user
            render json: {
                status: 201,
                message: "Successfully create new user session via JWT.",
                user: @user
            }
        else
            render json: {
                status: 401,
                message: "Failed to create new user session via JWT."
            }
        end
    end

    def destroy
        if logged_in?
            log_out!
            render json: {
                status: 204,
                message: "Successfully destoyed user session"
            }
        else
            render json: {
                status: 401,
                message: "Failed to destroy user session"
            }
        end
    end

    private
        # Parameter to the session route should be wrapperd in a user{} json
        def get_parameters
            params.require(:user).permit(:email, :password)
        end

        def get_jwt 
            params.require(:user).permit(:jwt)
        end
end
