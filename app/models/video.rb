# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :description, :creator_id, presence: true
    validates :title, uniqueness: true
    
    has_one_attached :video

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User
    
    has_many :likes,
        foreign_key: :video_id,
        class_name: :Like,
        dependent: :destroy

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

    def created_at
        attributes['created_at'].strftime("%b %e, %Y")
    end

end
