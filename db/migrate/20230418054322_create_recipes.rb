class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.string :user_id
      
      t.timestamps
    end
  end
end
