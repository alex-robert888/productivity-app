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
            render json: {
                status: 201,
                user: @user
            }
        else
            render json: { 
                status: 401, # unauthorized requests
            }
        end
    end

    def destroy
        if logged_in?
            log_out!
            render json: {
                status: 200, # successfully logged out
            }
        else
            render json: {
                status: 401 # no user to log out
            }
        end
    end

    private
        # Parameter to the session route should be wrapperd in a user{} json
        def get_parameters
            params.require(:user).permit(:email, :password)
        end
end
