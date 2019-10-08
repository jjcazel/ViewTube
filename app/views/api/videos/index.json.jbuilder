json.array! @videos do |video|
    json.extract! video, :id, :title, :creator_id
    json.videoUrl url_for(video.video)
end