class Api::TimetrackerController < Api::ApiController

  def logs
    @logs = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
    ]
    render 'index'
  end

end