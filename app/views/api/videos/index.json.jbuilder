@videos.each do |video|
    json.set! video.id do
        json.id video.id
        json.title video.title
        json.description video.description
        json.creatorId video.creator_id
        json.created_at video.created_at
        json.videoUrl url_for(video.video)

        json.createdAt video.created_at
        createdTimeAgo = time_ago_in_words(video.created_at)
        createdTimeAgo = createdTimeAgo.gsub(/about /, '')
        createdTimeAgo = createdTimeAgo.gsub(/over /, '')
        createdTimeAgo = createdTimeAgo.gsub(/less than /, '')
        createdTimeAgo = createdTimeAgo.capitalize
        createdTimeAgo += ' ago'
        json.createdTimeAgo createdTimeAgo
       
    end 
end