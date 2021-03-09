class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :title
      t.string :content
      t.integer :country_id
      t.integer :athlete_id
      t.boolean :favorite
      t.datetime :start_date
      t.datetime :end_date
  end
end
