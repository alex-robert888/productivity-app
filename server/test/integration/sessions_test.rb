require "test_helper"

class SessionsTest < ActionDispatch::IntegrationTest
  def setup
    @alex1 = User.new(full_name: "Alex Robert", email: "rob@example.com", date_of_birth: "2000-02-02", city: 'Cluj', country: 'Romania', username: 'alex', password: User.get_digest('alex1234'))
    # @alex1 = users("alex1")
     #@alex2 = users("alex2")
  end

  test "log in attempt with invalid parameters respond with status 401" do
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
    post sessions_path, params: {
      user: {
        email: @alex1.email,
        password: "alabala"
      }
    }
    json_response = JSON.parse(response.body)
    assert_equal 401, json_response["status"]
  end

  test "log in attempt with valid password should respond with status 201" do
    post sessions_path, params: {
      user: {
        email: @alex1.email,
        password: 'alex1234'
      }
    }
    json_response = JSON.parse(response.body)
    assert_equal 201, json_response["status"]
  end
end
