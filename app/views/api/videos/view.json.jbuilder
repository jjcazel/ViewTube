json.videos do
  json.set! @video.id do
    json.id @video.id
    json.views @video.views
  end
end