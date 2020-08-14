json.user do
  json.id @user.id
  json.email @user.email
  json.avatar @user.gravatar_url
end