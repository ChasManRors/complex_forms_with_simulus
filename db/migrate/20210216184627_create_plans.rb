class CreatePlans < ActiveRecord::Migration[6.1]
  def change
    create_table :plans do |t|
      t.string :title
      t.integer :minimum
      t.integer :maximum

      t.timestamps
    end
  end
end
