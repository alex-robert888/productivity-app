module SessionHelper
    def log_in!(user) 
        session[:user_id] = user.id;
    end

    def log_out!
        session.clear
    end

    def current_user
        if session[:user_id]
          @current_user ||= User.find_by(id: session[:user_id])
        end
    end

    def logged_in? 
        !current_user.nil?
    end

    def encode_jwt(payload)
        JWT.encode(payload, 'secret')
    end

    def decode_jwt(jwt)
        JWT.decode(jwt, 'secret', true, algorithm: 'HS256')
    end
end