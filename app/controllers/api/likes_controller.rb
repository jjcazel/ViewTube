class Api::LikesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    return false unless authorized_user?
    process_video_like if params[:video_id] 
  end

  def show
    render :show
  end

  def process_video_like
    @video = Video.find_by(id: params[:video_id])
    @like = Like.find_by(
      video_id: @video.id,
      creator_id: current_user.id
    )
    
    unless @like
      new_like
    else
      unless @like.is_dislike == true?(like_params[:is_dislike])
        update_like
      else
        destroy_like
      end
    end
  end

  def new_like
    @like = @video.likes.new(creator: current_user, is_dislike: true?(like_params[:is_dislike]))
    if @like.save
      render 'api/videos/show', status: :created
    else
      render json: @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update_like
    # update the record if the user has a like on this record
    ## and the is_dislike param does not match the curent record value
    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render 'api/videos/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy_like
    # remove the record if the user has a like on this record
    ## and the is_dislike param matches the curent record value

    if @like.delete  
      render 'api/videos/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:is_dislike, :creator_id, :video_id)
  end

  def true?(boolean_as_string)
    boolean_as_string == "true"
  end
end