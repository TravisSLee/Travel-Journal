class Entry < ApplicationRecord
    belongs_to :country
    validates :title, :content, presence: true
    accepts_nested_attributes_for :country

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
            created_at: self.created_at.strftime("%Y/%m/%d"),
            country: self.country
            
        }
    end
end