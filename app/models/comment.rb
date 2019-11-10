# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  validates :body, presence: true

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User


end
