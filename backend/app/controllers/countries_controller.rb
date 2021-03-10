class CountriesController < ApplicationController
    before_action :set_country, except: [:index]
    
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
        country = Country.find_by(id: params[:id])
    end

    def countries_params
        params.require(:country).permit(:name, :area)
    end
end