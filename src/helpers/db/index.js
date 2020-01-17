'use strict';

const sqlite3 = require( 'sqlite3' ).verbose();

const db = {};

// open the database
db.openOrCreate = () => {

    return new sqlite3.Database( './sqlite.db', sqlite3.OPEN_READWRITE, ( err ) => {
        if ( err ) {
            console.error( err.message );
        }
        console.log( 'Connected to the chinook database.' );
    });
};

db.run = ( command ) => {
    return new Promise( ( resolve, reject ) => {
        try {
            db.serialize( () => {
                db.run( command );
                resolve();
            });
        } catch ( err ) {
            reject( err );
        }
    });
};

db.get = ( db, query ) => {

    db.serialize( () => {
        db.each( query, ( err, row ) => {
            if ( err ) {
                console.error( err.message );
            }
            console.log( row.id + "\t" + row.name );
        });
    });

};

db.close = ( db ) => {

    db.close( ( err ) => {
        if ( err ) {
            console.error( err.message );
        }
        console.log( 'Close the database connection.' );
    });

};

module.exports = db;
