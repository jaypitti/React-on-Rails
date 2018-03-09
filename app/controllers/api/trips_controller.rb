class Api::TripsController < ApplicationController
  def index
  render json: Trip.all
end

def create
  trip = Trip.new(trip_params)
  if trip.save
    render json: trip
  else
    render json: { errors: trip.errors }, status: :unprocessable_entity
  end
end

def update
  trip = Trip.find(params[:id])
  trip.update(trip_params)
  render json: trip
end

def destroy
  Trip.find(params[:id]).destroy
  render json: { message: 'trip deleted' }
end

private

def trip_params
  params.require(:trip).permit(:day, :month, :year)
end
end
