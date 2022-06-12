import 'dotenv/config'
import express from 'express'

export const options = {
    mariaDB:{
        client:"mysql2",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:process.env.PASS_ROOT,
            database:"ecommerce",
        },
    },
    sqLite:{
        client:"sqlite3",
        connection:{
            filename:"./db.sqlite",
        },
        useNullAsDefault: true
    },
};