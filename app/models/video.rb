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
    validates :title, :creator_id, presence: true
    
    has_one_attached :video

    belongs_to :creator,
        foreign_key: :creator_id,
        class_name: :User

    def created_at
        attributes['created_at'].strftime("%b %e, %Y")
    end

end
