class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :day
      t.string :month
      t.string :year

      t.timestamps
    end
  end
end
