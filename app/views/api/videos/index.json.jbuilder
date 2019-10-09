@videos.each do |video|
    json.set! video.id do
        json.id video.id
        json.title video.title
        json.description video.description
        json.creatorId video.creator_id
        json.videoUrl url_for(video.video)
    end 
end