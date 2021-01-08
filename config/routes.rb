Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: 'json' } do
    get '/users/self', to: 'users#self'

    get '/timetracker/logs', to: 'timetracker#logs'
  end

  root to: "application#index"

  match "*path", to: "application#index", format: false, via: :get, constraints: -> (req) { !(req.fullpath =~ /^\/api\/.*/) }
end
