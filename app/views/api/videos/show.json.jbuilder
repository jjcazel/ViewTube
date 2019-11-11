
json.video do 
  if @current_user
    json.partial! 'api/videos/video.json.jbuilder', video: @video
  else
    json.partial! 'api/videos/so_video.json.jbuilder', video: @video
  end

  
end

json.comments do 
  @video.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id, :video_id
    end
  end
end

json.views do 
  @video.views.each do |view|
    json.set! view.id do
      json.extract! view, :id, :video_id, :user_id
    end
  end
end