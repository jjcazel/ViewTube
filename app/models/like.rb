# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

  validates :creator_id, :video_id, presence: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video
    # polymorphic: true

end
