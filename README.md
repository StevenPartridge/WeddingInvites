## Adding static files
Maintaining the file structure of your /dist, /build, or /public output from your build system, copy the static files to the /public folder of this project. When the server is run the site will be accessible at localhost:8080 or other specified port ( in /src/config ).

## Running the server
```
# install node modules
npm i

# run the server from the root of this project
node boot.js
```

## Using PKG to distribute testing packages
To aid in testing and distribution this project is set up to utilize [PKG](https://github.com/zeit/pkg). To install and use PKG follow these steps:
```
# install
npm i -g pkg

# run from the root of this project
npm run buildexe
```
Be sure to update the project name in Package.json to ensure the output is named appropriately.