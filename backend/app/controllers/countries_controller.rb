class CountriesController < ApplicationController
    before_action :set_country, except: [:index, :create]
    
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
        @country = Country.create(country_params)
        if @country.save
            render json: @country.country_to_json
        else
            render json: @country.errors, status: :unprocessable_entity
        end
    end

    def update
        @country = Entry.update(country_params)
        if @country.save
            render json: @country.country_to_json
        else
            render json: @country.errors, status: :unprocessable_entity
        end
    end

    private

    def set_country
        @country = Country.find_by(id: params[:id])
    end

    def country_params
        params.require(:country).permit(:name, :area)
    end
end