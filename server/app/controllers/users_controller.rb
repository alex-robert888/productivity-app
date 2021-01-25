class UsersController < ApplicationController
  skip_before_action :authorized?, only: [:create]

  # GET /users
  # Creates a new 
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/authenticated
  def show
    render json: @user
  end

  # POST /users/authenticated
  # Creates a new user with the credentials from params
  # @renders: user data, if successfully created
  #          error message, otherwise
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/authenticated
  # Updates the credentials of the authenticated user with params
  # @renders: user data with updated credentials, if update was successful
  #           error, otherwise
  def update
    if self.all_attributes_updated_succcessfully?
        render json: @user
    else
        render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/authenticated
  # Deletes from DB the currently authenticated user
  def destroy
    @user.destroy
  end

  private
    # Allow all user credentials, except the id
    def user_params
      params.require(:user).permit(:country, :email, :date_of_birth, :country, :city, :username, :password, :password_confirmation)
    end

    # For an update, allow all user credentials, excepr the id, password & password_confirmation
    def user_params_update
      params.require(:user).permit(:full_name, :email, :date_of_birth, :country, :city, :username)
    end

    # Update user attributes with given param
    # @returns: true, if all updates succeeded
    #           false, if any of the updates failed
    def all_attributes_updated_succcessfully?
      @user.update_attribute(:email, user_params_update[:email]) &&
      @user.update_attribute(:full_name, user_params_update[:full_name]) &&
      @user.update_attribute(:date_of_birth, user_params_update[:date_of_birth]) &&
      @user.update_attribute(:username, user_params_update[:username]) &&
      @user.update_attribute(:country, user_params_update[:country]) &&
      @user.update_attribute(:city, user_params_update[:city])
    end
end
