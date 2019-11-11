class CreateTable < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :user_id
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :views, [:video_id, :user_id], unique: true
  end
end
