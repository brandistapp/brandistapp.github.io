#!/usr/bin/env sh

# Abort on errors.
set -e

# Build website.
bundle exec jekyll clean
yarn run windicss:build
bundle exec jekyll build

# Navigate into the build output directory.
cd _site

# If you are deploying to a custom domain.
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'Deploy.'

# If you are deploying to "https://<USERNAME>.github.io".
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# If you are deploying to "https://<USERNAME>.github.io/<REPO>".
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

git push -f git@github.com:epictetus-personal-branding-assistant/epictetus-personal-branding-assistant.github.io.git main:gh-pages

cd -
