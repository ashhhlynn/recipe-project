class CreateRecipeIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_ingredients do |t|
      t.string :name
      t.string :quantity
      t.string :recipe_id

      t.timestamps
    end
  end
end
