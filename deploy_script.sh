bundle exec middleman build
git checkout gh-pages

# Remove all files in directory except the .git... local_resources and build
find . -maxdepth 1 -not -regex "\(.*/\..*\)\|\.\|\./local_resources\|\./build" | xargs git rm -rf
mv build/* .

# do the part below manually to ensure everything is all right.`
#git add --all
#git commit
#git push origin gh-pages
