class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :content
      t.integer :country_id
      t.boolean :favorite
      
      t.datetime :created_at
    end
  end
end
