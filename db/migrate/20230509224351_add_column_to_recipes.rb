class AddColumnToRecipes < ActiveRecord::Migration[6.1]
    def change
      add_column :recipes, :average, :float
      
    end
  end