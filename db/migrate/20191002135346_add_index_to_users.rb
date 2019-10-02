class AddIndexToUsers < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :password_digest, unique: true
    add_index :users, :email, unique: true
  end
end
