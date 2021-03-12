class Country < ApplicationRecord
    has_many :entries
    validates :name, :area, presence: true

    def self.arr_to_json
        self.all.map do |e|
            e.country_to_json
        end
    end 

    def country_to_json
        {
            id: self.id,
            name: self.name,
            area: self.area
        }
    end
end