export const options = {
    mariaDB:{
        client:"mysql2",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"root",
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