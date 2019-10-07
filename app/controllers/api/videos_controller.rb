class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show 
        @video = Video.find_by(id: params[:id])
        if @video
            render :show
        else
            render json: ['Video not found'], status 404
        end

    end

    def create

    @user = current_user
    @video = @user.videos.new(video_params)

    if @video.save
      render 'api/videos/show.json.jbuilder'
    else
      render json: @video.errors.full_messages, status: 422
    end

  end

  private

  def video_params
    params.require(:video).permit(:title, :description)
  end

end