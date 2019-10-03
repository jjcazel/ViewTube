class Changecolumn < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :image_url, :string, :null => true
  end
end
