FactoryBot.define do
    factory :alex, class: 'User' do
        full_name { "Alex Robert" }
        email { "robertalexandru2712@gmail.com" }
        date_of_birth { "2000-12-27" } 
        country { "Romania" }
        city { "Cluj" }
        username { "alex" }
        password { "alex1234" }
        password_confirmation { "alex1234" }
    end
end