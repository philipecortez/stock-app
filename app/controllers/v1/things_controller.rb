class V1::ThingsController < ApplicationController
  def index
    render json: { test: 'ok'}
  end
end