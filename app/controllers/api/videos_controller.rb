class Api::VideosController < ApplicationController

  def index
    @videos = Video.all.with_attached_video.includes!(:creator)
    
    if params[:search]
      scores = search_scores(params[:search])
      @videos = @videos.select { |video| scores[video.id] > 0 }
    end

    render 'api/videos/index.json.jbuilder'

  end

  def show 
      @video = Video.find_by(id: params[:id])
      @current_user = @current_user

      if @video
        render :show
      else
        render json: ['Video not found'], status: 404
      end

  end

  def create
    return false unless logged_in?
    @user = @current_user
    @video = Video.new(video_params)
    @video.creator_id = @user.id
    if @video.save
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



  private

  def video_params
    params.permit(:title, :description, :video)
  end

  def search_scores(search_params)
    search_words = search_params.downcase.split(' ')
    scores = {}

    @videos.map do |video|
      score = 0
      title = video.title.downcase
      desc = video.title.downcase

      search_words.each { |word| score += 1 if title.include?("#{word}") || desc.include?("#{word}") }

      scores[video.id] = score
    end

    scores

  end


end