Entry.destroy_all
Country.destroy_all

entry1 = Entry.create(title: "Love it here", content: "So much fun", country_id: 1, favorite: false, start_date: "2/2/20", end_date: "2/26/20" )
entry2 = Entry.create(title: "Love Eating", content: "So delicious", country_id: 1, favorite: false, start_date: "3/1/19", end_date: "4/1/19" )


country1 = Country.create(name: "Taiwan", area: "Taipei")