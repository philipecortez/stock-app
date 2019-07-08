Rails.application.routes.draw do
  root to: 'single_page#index'

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
end
