class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.belongs_to :Location, foreign_key: true
      t.string :address

      t.timestamps
    end
  end
end
