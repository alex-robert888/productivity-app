require 'rails_helper'

RSpec.describe Task, type: :model do
  context "validating task attributes" do
    let!(:alex) { FactoryBot.create(:alex) }
    let!(:task) { FactoryBot.create(:task, user_id: alex.id) }

    it "is a valid task" do
      expect(task.valid?).to eq(true)
    end

    context "validating presence" do
      it "is an invalid task if user_id is not present" do
        task.user_id = "";
        expect(task.valid?).to eq(false)
      end

      it "is an invalid task if title is not present" do
        task.title = "";
        expect(task.valid?).to eq(false)
      end
    end

    context "validating length" do
      it "is an invalid task if title is longer than 300 characters" do
        task.title = "a" * 301;
        expect(task.valid?).to eq(false)
      end
    end

    context "validating size constraints" do
      it "is an invalid task if the duration is negative" do
        task.duration = -1;
        expect(task.valid?).to eq(false)
      end
    end
  end
end
