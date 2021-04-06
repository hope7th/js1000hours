 cnpm install --save-dev @babel/core @babel/register
cnpm install --save-dev @babel/preset-env
 cnpm install --save-dev mocha
./node_modules/.bin/mocha --require @babel/register
npm run test

cnpm install --save-dev @istanbuljs/nyc-config-babel
cnpm install --save-dev babel-plugin-istanbul

难点 babelrc文件的编写cn
.nycrc
{
    "extends":"@istanbuljs/nyc-config-babel"
}


.babelrc 
{
    "presets": ["@babel/preset-env"],
    "plugins": ["istanbul"]
}