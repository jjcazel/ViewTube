
  json.set! @current_vid.id do
    json.id @current_vid.id
    json.likes @current_vid.likes.where("is_dislike = FALSE").count
    json.dislikes @current_vid.likes.where("is_dislike = TRUE").count
    if @current_vid.likes.where("is_dislike = FALSE").pluck("creator_id").include?(current_user.id)
        json.currentUserDislikes "false"
    elsif @current_vid.likes.where("is_dislike = TRUE").pluck("creator_id").include?(current_user.id)
        json.currentUserDislikes "true"
    else
        json.currentUserDislikes "nothing"
    end
    # TODO: N+1
  end

   