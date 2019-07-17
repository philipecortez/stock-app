class Api::V1::SymbolsController < ApplicationController
  def index
    @symbols = iex_client.symbols
    render json: @symbols 
  end
end