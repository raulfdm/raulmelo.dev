# Prevents installing deps for these projects
cd ./projects

rm -rf projects/server projects/web

# Build
yarn workspace @raulmelo.dev/next build
