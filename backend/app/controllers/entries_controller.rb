class EntriesController < ApplicationController
    before_action :set_entry
    
    def index
        entries = Entry.all
    end

    def  show

    end

    def create

    end

    def update

    end

    private

    def  set_entry
        entry = Entry.find_by(id: params[:id])
    end

    def set_country
        country = Country.find_or_create_by(id: params[:country_id])
    end

    def entries_params
        params.require(:entry).permit( :country_id, :title, :content, :favorite, :start_date, :end_date, country_attributes: [
          :name,
          :area,
          :activity
       ])
    end
end