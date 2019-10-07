json.array! @videos do |video|
    json.extract! video, :id, :title
    json.photoUrl url_for(video.video)
end