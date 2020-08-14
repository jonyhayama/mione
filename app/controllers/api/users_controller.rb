class Api::UsersController < Api::ApiController

  def self
    @user = current_user
    render 'show'
  end

end