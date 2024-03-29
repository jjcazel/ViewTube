class Api::ViewsController < ApplicationController

  def create
    # if logged_in?
      @view = View.find_by(
        video_id: params[:video_id],
        user_id: current_user.id)

      if @view
        @view.updated_at = Time.now()
      else
        @view = View.new(
          video_id: params[:video_id],
          user_id: current_user.id)
      end

      @view.save
    # end

    # always update the video views
    @video = Video.find_by(id: params[:video_id])
    @video.views.count

    if @video.save
      render 'api/videos/show'
    else
      render json: @video.errors.full_messages, status: 422
    end

  end

end