@videos.each do |video|

  json.videos do
    json.set! video.id do
      json.id video.id
      json.title video.title
      json.videoUrl url_for(video.video)
      
      json.creatorId video.creator_id
      json.commentIds []

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

  creator = video.creator

  json.users do
    json.set! creator.id do
      json.id creator.id
      json.first_name creator.first_name
      json.last_name creator.last_name
      
    end

    json.set! @user.id do
      json.uploadedVideos @videos.map { |video| video.id }
    end

  end

end