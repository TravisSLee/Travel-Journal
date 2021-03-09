class CountriesController < ApplicationController
    
    
    def index
        countries = Country.all
    end

    def  show

    end

    def create

    end

    def update

    end

    def delete

    end

    private

    def  set_entry
        entry = Entry.find_by(id: params[:id])
    end

    def set_country
        country = Country.find_or_create_by(id: params[:country_id])
    end

    def countries_params
        params.require(:country).permit(:name, :area, :activity)
    end
end