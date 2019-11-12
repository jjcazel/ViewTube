class Api::CommentsController < ApplicationController
    
  def create
    @comment = Comment.new(
      body: params[:body],
    )
    render 'no current user logged in' if !current_user
    @comment.user_id = current_user.id
    @comment.video_id = params[:video_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.user_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Access Denied"], status: 401
    end
  end


  private

  def comment_params
      params.require(:comment).permit(:user_id, :video_id, :body)
  end

  
end