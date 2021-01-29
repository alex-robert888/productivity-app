require 'rails_helper'

RSpec.describe "Users", type: :request do
  context "performing CRUD operations" do
    context "performing create operation" do
      let!(:alex) { FactoryBot.attributes_for(:alex) }

      context "validating attributes presence" do
        it "succeeds when all attributes are present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(201);
        end

        it "succeeds when all attributes are present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(201);
        end

        it "fails when full_name not present" do
          post users_path, :params => {
            user: {
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(401);
        end

        it "fails when email not present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              date_of_birth: alex[:date_of_birth],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(401);
        end

        it "fails when date_of_birth not present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(401);
        end

        it "fails when country not present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              city: alex[:city],
              username: alex[:username],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(401);
        end

        it "fails when city not present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              username: alex[:username],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(401);
        end

        it "fails when username not present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              city: alex[:city],
              password: alex[:password],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(401);
        end

        it "fails when password not present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              city: alex[:city],
              username: alex[:username],
              password_confirmation: alex[:password_confirmation]
            }
          }
          expect(response).to have_http_status(401);
        end

        it "fails when password_confirmation not present" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              city: alex[:city],
              username: alex[:username],
              password: alex[:password]
            }
          }
          expect(response).to have_http_status(401);
        end
      end

      context "validating matching passwords" do
        it "fails when password and password_confirmation do NOT match" do
          post users_path, :params => {
            user: {
              full_name: alex[:full_name],
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: "alex1234",
              password_confirmation: "alex5678"
            }
          }
          expect(response).to have_http_status(401);
        end
      end
    end

    context "peforming update operation" do
      context "being authorized" do
        let!(:alex) { FactoryBot.create(:alex) }
        let!(:header_jwt) { User.encode_jwt({ id: alex[:id] }) }
  
        it "succeeds when all credentials are provided" do
          params = {
            user: {
              full_name: alex[:full_name] + "123",
              email: alex[:email] + "123",
              date_of_birth: alex[:date_of_birth],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: "alex1234",
              password_confirmation: "alex1234"
            }
          }
          patch "/users/authenticated", :params => params, :headers => { "Authorization" => header_jwt }            
          expect(response).to have_http_status(200);
        end

        it "succeeds when all credentials are provided" do
          params = {
            user: {
              full_name: alex[:full_name] + "123",
              email: alex[:email],
              date_of_birth: alex[:date_of_birth],
              country: alex[:country],
              city: alex[:city],
              username: alex[:username],
              password: "alex1234",
              password_confirmation: "alex1234"
            }
          }
          patch "/users/authenticated", :params => params, :headers => { "Authorization" => header_jwt }            
          expect(response).to have_http_status(200)
          expect(JSON.parse(response.body)["full_name"]).to eq(alex[:full_name] + "123")
        end
      end
    end
  end
end
