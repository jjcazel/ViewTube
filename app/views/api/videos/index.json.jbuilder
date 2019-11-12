@videos.each do |video|
    json.set! video.id do
        json.id video.id
        json.title video.title
        json.description video.description
        json.creatorId video.creator_id
        # json.views video.views.values.length
        json.created_at video.created_at
        json.videoUrl url_for(video.video)
    end 
end

    # json.views do 
    #     @video.views.each do |view|
    #         json.set! view.id do
    #         json.extract! view, :id, :video_id, :user_id
    #     end
    # end
# end