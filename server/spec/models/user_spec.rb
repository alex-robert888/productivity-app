require "rails_helper"


RSpec.describe User, type: :model do
  context "validating user attributes" do
    context "validating user attributes presence" do
      it "suceeds when all credentials are present" do
        alex = build(:alex)
        expect(alex.save).to eq(true)
      end

      it "fails without full_name presence" do
        alex = build(:alex, full_name: "")
        expect(alex.save).to eq(false)
      end 

      it "fails without email presence" do
        alex = build(:alex, email: "")
        expect(alex.save).to eq(false)
      end

      it "fails without date_of_birth presence" do
        alex = build(:alex, date_of_birth: "")
        expect(alex.save).to eq(false)
      end

      it "fails without country presence" do
        alex = build(:alex, country: "")
        expect(alex.save).to eq(false)
      end

      it "fails without city presence" do
        alex = build(:alex, city: "")
        expect(alex.save).to eq(false)
      end

      it "fails without username presence" do
        alex = build(:alex, username: "")
        expect(alex.save).to eq(false)
      end

      it "fails without password presence" do
        alex = build(:alex, password: "")
        expect(alex.save).to eq(false)
      end

      it "fails without password_confirmation presence" do
        alex = build(:alex, password_confirmation: "")
        expect(alex.save).to eq(false)
      end
    end
    
    context "validating email" do
      it "fails when no @ is in the format" do
        alex = build(:alex, email: "robertalexandru2712gmail.com");
        expect(alex.save).to eq(false)
      end

      it "fails when no . is in the format" do
        alex = build(:alex, email: "robertalexandru2712@gmailcom");
        expect(alex.save).to eq(false)
      end

      it "fails when . comes before @" do
        alex = build(:alex, email: "robertalexandru2712.gmail@com");
        expect(alex.save).to eq(false)
      end
    end
  end
end
