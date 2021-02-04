/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File：index.js
 * Author ：LvChengbin<lvchengbin59@gmail.com>
 * Time ：02/14/2020
 * Description ：
 ******************************************************************/


const Ynn = require( 'ynn' );

module.exports = class extends Ynn.Controller {

    async indexAction() {
        return this.render('../../index.html')
    }
}
