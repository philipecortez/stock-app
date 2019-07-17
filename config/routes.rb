Rails.application.routes.draw do
  root to: 'single_page#index'

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'symbols', to: 'symbols#index'
    end
  end
end
