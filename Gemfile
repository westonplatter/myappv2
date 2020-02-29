source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.2'

gem 'rails', '~> 6.0.0.rc1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.12'
gem 'sass-rails', '~> 5'
gem 'bootsnap', '>= 1.4.2', require: false

gem 'webpacker', '~> 4.x'
gem 'react-rails'

gem 'devise'
gem 'rolify'
gem 'mailgun-ruby'
gem "figaro"
gem "pundit"
gem "simple_form"

group :development do
  gem 'pry'

  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'

  gem 'capistrano-figaro-yml'
  gem 'capistrano-rails-console', :require => false

  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :development, :test do
  gem 'capistrano'
  gem 'capistrano-bundler'
  gem 'capistrano-rails'
  gem 'capistrano-rbenv'
  gem 'capistrano-sidekiq'
  gem 'capistrano3-puma'

  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec_junit_formatter'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'database_cleaner'
  gem 'phantomjs', :require => 'phantomjs/poltergeist'
  gem 'poltergeist'
end


gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
