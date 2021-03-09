class EntriesController < ApplicationController
 

    private

    def entries_params
        params.require(:entry).permit( :country_id, :title, :content, :favorite, :start_date, :end_date, country_attributes: [
          :name,
          :area,
          :activity
       ])
    end
end