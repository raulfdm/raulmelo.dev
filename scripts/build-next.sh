# Prevents installing deps for these projects
cd ./projects

rm -rf projects/server projects/web

echo "Other projects deleted"
ls -a

# Build
yarn workspace @raulmelo.dev/next build
