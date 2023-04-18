class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :text
      t.string :recipe_id
      t.string :user_id

      t.timestamps
    end
  end
end
