class EntriesController < ApplicationController
    before_action :set_entry, except: [:index, :create]
    
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
        @country = Country.find_or_create_by(name: params[:country][:name], area: params[:country][:area])
        @entry = Entry.new(entry_params)
        @entry.country_id = @country.id
        if @entry.save
            render json: @entry.entry_to_json
        else
            render json: @entry.errors, status: :unprocessable_entity
        end
    end

    def update
        @entry.update(entry_params)
        if @entry.save
            render json: @entry.entry_to_json
        else
            render json: @entry.errors, status: :unprocessable_entity
        end
    end

    def destroy
        if @entry.nil?
            render json: {message: "You have no entries, please write one down."}
        else
            @entry.delete
        end
    end

    private

    def set_entry
        @entry = Entry.find_by(id: params[:id]);
    end

    def set_country
        @country = Country.find_or_create_by(id: params[:country_id]);
    end

    def country_params
        params.require(:country).permit(:name, :area)
    end

    def entry_params
        params.require(:entry).permit(:title, :content, :favorite, :country_id, country_attributes: [
          :name,
          :area
       ])
    end
end