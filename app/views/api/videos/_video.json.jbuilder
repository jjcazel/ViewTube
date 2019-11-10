json.set! video.id do
    json.id video.id
    json.title video.title
    json.likes video.likes.where("is_dislike = FALSE").count
    json.dislikes video.likes.where("is_dislike = TRUE").count
    json.description video.description
    json.creatorId video.creator_id
    json.created_at video.created_at
    json.videoUrl url_for(video.video)

    json.commentsCount video.comments.length
    
    if video.likes.where("is_dislike = FALSE").pluck("creator_id").include?(current_user.id)
        json.currentUserDislikes "false"
    elsif video.likes.where("is_dislike = TRUE").pluck("creator_id").include?(current_user.id)
        json.currentUserDislikes "true"
    else
        json.currentUserDislikes "nothing"
    end
    
    json.comments video.comments.to_h if video.comments.empty?

    video.comments.each do |comment|
    json.comments do
        json.set! comment.id do
        json.extract! comment, :id, :body, :video_id, :author_id
        json.firstName comment.user.firstName
        json.lastName comment.user.lastName
        end
    end
    end
end
