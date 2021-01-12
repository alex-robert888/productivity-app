require "test_helper"

class UserTest < ActiveSupport::TestCase
  def setup   
    @user = User.new(full_name: "Marshall Mathers", email: "mmlp@gmail.com", date_of_birth: '1972-10-18', country: "USA", city: "Detroit", username: "Slim Shady", password: "stan1234", password_confirmation: "stan1234")
  end
  
  # test "given user should be valid" do
  #   assert @user.valid?
  # end

  
  test "full_name must be present" do
    user_without_full_name = @user.dup
    user_without_full_name.full_name = "";
    assert_not user_without_full_name.valid?
  end

  test "email must be present" do
    user_without_email = @user.dup
    user_without_email.email = " " * 5;
    assert_not user_without_email.valid?
  end

  test "email address should have an @" do
    user_with_incorrect_email = @user.dup
    user_with_incorrect_email.email = "mmlp.com"
    assert_not user_with_incorrect_email.valid?
  end

  test "email address should have a domain name" do
    user_with_incorrect_email = @user.dup
    user_with_incorrect_email.email = "mmlp@gmail"
    assert_not user_with_incorrect_email.valid?
  end

  test "email address should have @ and a domain name in correct order" do
    user_with_incorrect_email = @user.dup
    user_with_incorrect_email.email = "mmlp.comgmail@"
    assert_not user_with_incorrect_email.valid?
  end

  test "email address should be unique" do
    user_with_duplicate_email = @user.dup
    @user.save
    assert_not user_with_duplicate_email.valid?
  end

  test "date_of_birth must be present" do
    user_without_date_of_birth = @user.dup
    user_without_date_of_birth.date_of_birth = " " * 5;
    assert_not user_without_date_of_birth.valid?
  end

  test "country must be present" do
    user_without_country = @user.dup
    user_without_country.country = " " * 5;
    assert_not user_without_country.valid?
  end

  test "city must be present" do
    user_without_city = @user.dup
    user_without_city.city = " " * 5;
    assert_not user_without_city.valid?
  end

  test "username must be present" do
    user_without_username = @user.dup
    user_without_username.username = " " * 5;
    assert_not user_without_username.valid?
  end

  test "username length must be of maximum 50 charaters" do
    user_without_username = @user.dup
    user_without_username.username = "z" * 51;
    assert_not user_without_username.valid?
  end

  test "password must be present" do
    user_without_password = @user.dup
    user_without_password.password = " " * 5;
    assert_not user_without_password.valid?
  end

  test "password length must be of minimum 6 characters" do
    user_without_password = @user.dup
    user_without_password.password = "a" * 5;
    assert_not user_without_password.valid?
  end

  test "password_confirmation must be present" do
    user_without_password_confirmation = @user.dup
    user_without_password_confirmation.password_confirmation = " " * 5;
    assert_not user_without_password_confirmation.valid?
  end
end
