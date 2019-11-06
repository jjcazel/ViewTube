json.videos do
  json.set! @poly_entity.id do
    json.id @poly_entity.id
    json.likes @poly_entity.likes.where("is_dislike = FALSE").count
    json.dislikes @poly_entity.likes.where("is_dislike = TRUE").count
    # TODO: N+1
    if logged_in?
      current_like = Like.find_by(user_id: current_user.id)
      json.currentUserDislikes current_like ? current_like.is_dislike : nil
    end
  end
end