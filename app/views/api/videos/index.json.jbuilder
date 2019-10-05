json.array! @videos do |video|
    json.extract! video, :id, :title
    jason.photoUrl url_for(video.video)
end