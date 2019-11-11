class Api::CommentsController < ApplicationController
    
  def create
    # debugger
    @comment = Comment.new(
      body: params[:body],
    )
    @comment.user_id = current_user.id
    @comment.video_id = params[:video_id]

    if @comment.save
      # debugger
      render :show
      # render 'api/videos/_video'
    else
      # debugger
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Access Denied"], status: 401
    end
  end
  
end