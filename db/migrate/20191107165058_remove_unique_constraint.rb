class RemoveUniqueConstraint < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :video_id
    remove_index :likes, :creator_id

    add_index :likes, :video_id
    add_index :likes, :creator_id
  end
end
