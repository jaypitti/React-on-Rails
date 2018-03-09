class Api::TripsController < ApplicationController
  def index
  render json: Location.all
end

def create
  location = Location.new(location_params)
  if location.save
    render json: location
  else
    render json: { errors: location.errors }, status: :unprocessable_entity
  end
end

def update
  location = Location.find(params[:id])
  location.update(location_params)
  render json: location
end

def destroy
  Location.find(params[:id]).destroy
  render json: { message: 'Location deleted' }
end

private

def location_params
  params.require(:location).permit(:city, :state)
end
end
