class CountriesController < ApplicationController
    before_action :set_country, except: [:index]
    
    def index
        countries = Country.all
        if countries.empty?
            render json: {message: "You have no countries, please write an entry down."}
        else
            render json: Country.arr_to_json
        end
    end

    def  show
        if @country.nil?
            render json: {message: "You have no countries, please write an entry down."}
        else
            render json: @country.arr_to_json
        end
    end

    def create

    end

    def update

    end

    def delete

    end

    private

    def set_country
        @country = Country.find_by(id: params[:id])
    end

    def countries_params
        params.require(:country).permit(:name, :area)
    end
end