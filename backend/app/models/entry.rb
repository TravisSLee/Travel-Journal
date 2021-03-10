class Entry < ApplicationRecord
    belongs_to :country

    def self.arr_to_json
        self.all.map do |e|
            e.entry_to_json
        end
    end 

    def entry_to_json
        {
            id: self.id,
            title: self.title,
            content: self.content,
            favorite: self.favorite,
            country: self.country
        }
    end
end