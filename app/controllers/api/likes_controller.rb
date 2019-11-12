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
    @json_string = 'api/videos/like.json.jbuilder'
    @current_vid = Video.find_by(id: params[:video_id])
    @like = Like.find_by(
      video_id: @current_vid.id,
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
   
    @like = @current_vid.likes.new
    @like.creator = current_user
    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render @json_string
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update_like
    # update the record if the user has a like on this record
    ## and the is_dislike param does not match the curent record value

    @like.is_dislike = true?(like_params[:is_dislike])

    if @like.save
      render @json_string
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy_like
    # remove the record if the user has a like on this record
    ## and the is_dislike param matches the curent record value

    if @like.delete  
      render @json_string
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