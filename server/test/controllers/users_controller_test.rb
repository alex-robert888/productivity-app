require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_2 = users(:user_2)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { city: @user_2.city, country: @user_2.country, date_of_birth: @user_2.date_of_birth, email: @user_2.email, full_name: @user_2.full_name, password_digest: @user_2.password_digest, username: @user_2.username } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user_2), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user_2), params: { user: { city: @user_2.city, country: @user_2.country, date_of_birth: @user_2.date_of_birth, email: @user_2.email, full_name: @user_2.full_name, password_digest: @user_2.password_digest, username: @user_2.username } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user_2), as: :json
    end

    assert_response 204
  end
end
