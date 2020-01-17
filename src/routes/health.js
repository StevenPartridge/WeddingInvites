'use strict';

const dbHelpers = require( '../helpers/db' );

// included by app.js

module.exports = ( req, res ) => {

    const db = dbHelpers.openOrCreate();

    // const query = 'select * from '
    res.json({ status:'ok' });
};
