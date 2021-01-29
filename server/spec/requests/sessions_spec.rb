require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  context "creating a user session" do
    let!(:alex) { FactoryBot.create(:alex) }

    it "succeeds and renders a jwt when right email and password are provided" do
      post sessions_path, :params => {
        user: { 
          email: "robertalexandru2712@gmail.com",
          password: "alex1234"
        }
      }
      expect(JSON.parse(response.body)["status"]).to eq(201);
    end

    it "fails when wrong email is provided" do
      post sessions_path, :params => {
        user: { 
          email: "asd@gmail.com",
          password: "alex1234"
        }
      }
      expect(JSON.parse(response.body)["status"]).to eq(401);
    end

    it "fails when wrong password is provided" do
      post sessions_path, :params => {
        user: { 
          email: "robertalexandru2712@gmail.com",
          password: "alex123456678"
        }
      }
      expect(JSON.parse(response.body)["status"]).to eq(401);
    end
  end
end
