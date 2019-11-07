json.set! video.id do
    json.id video.id
    json.title video.title
    json.likes video.likes.where("is_dislike = FALSE").count
    json.dislikes video.likes.where("is_dislike = TRUE").count
    json.description video.description
    json.currentUserDislikes video.likes.pluck("creator_id").include?(current_user.id)
    json.creatorId video.creator_id
    json.created_at video.created_at
    json.videoUrl url_for(video.video)
    # created_at
    # new Date()
end
