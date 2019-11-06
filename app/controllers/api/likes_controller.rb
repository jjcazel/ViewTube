class Api::LikesController < ApplicationController

  def create
    return false unless authorized_user?

    process_video_like if params[:video_id]
  end

  def process_video_like
    @json_string = 'api/videos/like.json.jbuilder'
    @poly_entity = Video.find_by(id: params[:video_id])
    @like = Like.find_by(
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
    @like = @poly_entity.likes.new
    @like.user = current_user
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
    params.require(:like).permit(:is_dislike)
  end

  def true?(boolean_as_string)
    boolean_as_string == "true"
  end
end