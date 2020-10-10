# Variables
NETRC_PATH=~/.netrc

# Setup git globals
git config --global user.email "melo.raulf@gmail.com"
git config --global user.name "Raul Melo"

# Clean up existing .netrc
rm $NETRC_PATH

# Write .netrc
echo "machine api.heroku.com
  login melo.raulf@gmail.com
  password $HEROKU_API_KEY
machine git.heroku.com
  login melo.raulf@gmail.com
  password $HEROKU_API_KEY" >> $NETRC_PATH

# Define heroku git app
heroku git:remote -a raulmelo-dev-server

# Push only server code
git push heroku `git subtree split --prefix projects/server`:main --force
