require "test_helper"

class SessionsTest < ActionDispatch::IntegrationTest
  def setup
    @user = users("alex")
  end

  test "log in attempt with invalid parameters respond with status 401" do
    get sessions_path
    post sessions_path, params: {
      user: {
        email: " ",
        password: " "
      }
    }
    json_response = JSON.parse(response.body)
    assert_equal 401, json_response["status"]
  end

  test "log in attempt with invalid password respond with status 401" do
    get sessions_path
    post sessions_path, params: {
      user: {
        email: @user.email,
        password: "asd"
      }
    }
    json_response = JSON.parse(response.body)
    assert_equal 401, json_response["status"]
  end

  test "log in attempt with valid password should respond with status 201" do
    get sessions_path
    post sessions_path, params: {
      user: {
        email: @user.email,
        password: 'alex1234'
      }
    }
    json_response = JSON.parse(response.body)
    assert_equal 201, json_response["status"]
  end
end
