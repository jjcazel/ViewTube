json.extract! @comment, :id, :body, :user_id, :video_id
json.first_name @comment.user.first_name
json.last_name @comment.user.last_name