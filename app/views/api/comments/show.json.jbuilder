json.extract! @comment, :id, :body, :user_id, :video_id
json.username @comment.user.first_name