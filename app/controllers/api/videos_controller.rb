class Api::VideosController < ApplicationController

  def index
      @videos = Video.all.with_attached_video.includes!(:creator)

      render :index
  end

  def show 
      @video = Video.find_by(id: params[:id])
      if @video
        # @users = [@video.creator] + @video.commenters
        # @comments = @video.comments
        render :show
      else
        render json: ['Video not found'], status: 404
      end

  end

  def create
    return false unless logged_in?
    # debugger
    @user = current_user
    @video = Video.new(video_params)
    @video.creator_id = @user.id
    # debugger
    if @video.save
      # @comments = @video.comments
      render 'api/videos/show.json.jbuilder'
    else
      render json: @video.errors.full_messages, status: 422
    end

  end

  def destroy
    @video = Video.find_by(id: params[:id])
    @user = @video.creator

    return false unless logged_in?(@user.id)

    @video.delete
    render 'api/videos/show.json.jbuilder'
  end

  def uploaded
    @user = User.find_by(id: params[:user_id])
    @videos = @user.videos.order(created_at: :desc).limit(5)
    render 'api/videos/uploaded.json.jbuilder'
  end



  private

  def video_params
    params.permit(:title, :description, :video)
  end

end