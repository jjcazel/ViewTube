class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :video_id, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end
    add_index :likes, :video_id, unique: true
    add_index :likes, :creator_id, unique: true

  end
end
