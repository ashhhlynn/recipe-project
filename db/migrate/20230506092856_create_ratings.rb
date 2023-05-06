class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :score
      t.string :recipe_id
      t.string :user_id

      t.timestamps
    end
  end
end
