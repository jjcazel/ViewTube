
  json.set! @current_vid.id do
    json.id @current_vid.id
    json.currentUserDislikes @current_vid.likes.pluck("creator_id").include?(current_user.id)
    json.likes @current_vid.likes.where("is_dislike = FALSE").count
    json.dislikes @current_vid.likes.where("is_dislike = TRUE").count
    # TODO: N+1
  end

   