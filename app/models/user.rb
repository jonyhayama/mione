class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable :registerable, :recoverable,
  devise :database_authenticatable, 
         :rememberable, :validatable
  
  def gravatar_url
    hash = Digest::MD5.hexdigest(self.email)
    "https://www.gravatar.com/avatar/#{hash}?d=mp"
  end
end
