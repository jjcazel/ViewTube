json.array! @videos do |video|
    json.extract! video, :id, :title, :creator_id
    json.photoUrl url_for(video.video)
end