class AddColumnToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :is_dislike, :boolean, default: false, null: false
  end
end
