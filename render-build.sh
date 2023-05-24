#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate
