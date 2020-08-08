import knex from 'knex'
import path from 'path'

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.TODO_DB_USER,
        password: process.env.TODO_DB_PW,
        database: 'todos_test'
    },
    useNullAsDefault: true
});

export default db;