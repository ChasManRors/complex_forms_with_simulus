class Plan < ApplicationRecord
  attribute :range

  def range=(value)
    self.minimum, self.maximum = value.split '-'
  end

  def range
    (minimum..maximum)
  end
end