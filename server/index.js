/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File：index.js
 * Author ：LvChengbin<lvchengbin59@gmail.com>
 * Time ：02/14/2020
 * Description ：
 ******************************************************************/

const Ynn = require( 'ynn' );
const historyApiFallback = require('koa2-connect-history-api-fallback');

const app = new Ynn( {
    root : __dirname,
    debugging : false,
    static: {
        '/static/(.*)': '../dist/'
    },
    logging : true
} );

app.use(historyApiFallback.default({
    index: '/'
}))
const port = Ynn.cargs.port || 5018
app.listen( port );
module.exports = app;
console.log('服务运行中：port = ' + port)
