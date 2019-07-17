class ApplicationController < ActionController::Base
  
  private

  def iex_client
    @iex_client ||= IEX::Api::Client.new
  end
end
