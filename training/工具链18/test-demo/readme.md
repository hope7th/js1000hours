 cnpm install --save-dev @babel/core @babel/register
cnpm install --save-dev @babel/preset-env
 cnpm install --save-dev mocha
./node_modules/.bin/mocha --require @babel/register
npm run test
难点 babelrc文件的编写