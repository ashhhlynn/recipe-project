class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :user_id
      t.string :recipe_id

      t.timestamps
    end
  end
end
