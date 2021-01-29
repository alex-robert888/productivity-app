class SessionsController < ApplicationController
    skip_before_action :authorized?, only: [:create]

    # POST /sessions/
    # Log in user, by finding user with given email and password
    # @render: - a new JWT auth. token, if email and password are valid and match
    #          - unauthorized request status
    def create
        @user = User
                .find_by(email: get_parameters[:email].downcase)
                .try(:authenticate, get_parameters[:password]) 

        if @user
            jwt_payload = {
                user_id: @user.id
            }
            render json: {
                status: 201,
                message: "Successfully created new user session.",
                user: @user,
                jwt: User.encode_jwt(jwt_payload)
            }

        else
            render json: {
                status: 401,
                message: "Failed to create new user session."
            }
        end
    end

    private
        # Parameter to the session route should be wrapperd in a user{} json
        def get_parameters
            params.require(:user).permit(:email, :password)
        end
end
