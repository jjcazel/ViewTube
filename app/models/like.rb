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


end
