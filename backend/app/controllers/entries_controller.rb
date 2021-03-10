class EntriesController < ApplicationController
    before_action :set_entry, except: [:index]
    
    def index
        entries = Entry.all
        if entries.empty?
            render json: {message: "You have no entries, please write one down."}
        else
            render json: Entry.arr_to_json
        end
    end

    def  show
        if @entry.nil?
            render json: {message: "You have no entries, please write one down."}
        else
            render json: @entry.entry_to_json
        end
    end

    def create

    end

    def update

    end

    private

    def set_entry
        @entry = Entry.find_by(id: params[:id])
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