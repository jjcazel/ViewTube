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

  json.comments video.comments.to_h if video.comments.empty?

  video.comments.each do |comment|
    json.comments do
      json.set! comment.id do
      json.extract! comment, :id, :body, :video_id, :user_id
      json.firstName comment.user.first_name
      json.lastName comment.user.last_name
      end
    end
  end
end