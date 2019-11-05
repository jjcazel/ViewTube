json.set! video.id do
    json.id video.id
    json.title video.title
    json.description video.description
    json.creatorId video.creator_id
    json.created_at video.created_at
    json.videoUrl url_for(video.video)
    # created_at
    # new Date()
end
