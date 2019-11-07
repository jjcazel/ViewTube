if @current_user
  json.partial! 'api/videos/video.json.jbuilder', video: @video
else
  json.partial! 'api/videos/so_video.json.jbuilder', video: @video
end