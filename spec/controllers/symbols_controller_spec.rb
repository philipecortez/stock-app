require 'rails_helper'

RSpec.describe Api::V1::SymbolsController, type: :controller do
  describe 'GET index' do
    before do
      get :index
    end

    it 'responds with 200' do
      expect(response).to have_http_status(:success)
    end

    it 'renders a json with an array of symbols' do
      symbols = JSON.parse(response.body, symbolize_names: true)

      expect(symbols).to be_a(Array)
      expect(symbols[0].keys).to match([:symbol, :name, :date, :type, :region, :currency])
    end
  end
end