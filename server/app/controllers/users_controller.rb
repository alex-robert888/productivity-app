class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update_jwt
    decoded_jwt = User.decode_jwt(params[:jwt]);
    # render json: decoded_jwt[0]["user_id"];
    @user = User.find(decoded_jwt[0]["user_id"]);
    if self.all_attributes_updated_succcessfully?
        render json: @user
    else
        render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:country, :email, :date_of_birth, :country, :city, :username, :password, :password_confirmation)
    end

    def user_params_update
      params.require(:user).permit(:full_name, :email, :date_of_birth, :country, :city, :username)
    end

    def all_attributes_updated_succcessfully?
      @user.update_attribute(:email, user_params_update[:email]) &&
      @user.update_attribute(:full_name, user_params_update[:full_name]) &&
      @user.update_attribute(:date_of_birth, user_params_update[:date_of_birth]) &&
      @user.update_attribute(:username, user_params_update[:username]) &&
      @user.update_attribute(:country, user_params_update[:country]) &&
      @user.update_attribute(:city, user_params_update[:city])
    end
end
