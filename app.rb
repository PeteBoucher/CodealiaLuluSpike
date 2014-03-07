require 'sinatra'

set :public_folder, 'public'
set :port, 3000
Tilt.register Tilt::ERBTemplate, 'html.erb'

get '/' do
  erb :index
end
