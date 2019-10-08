const { override, fixBabelImports,addLessLoader } = require('customize-cra');

 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@primary-color': 'rgba(51,51,51,0.76)' },
 }),
 );
