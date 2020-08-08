import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.TODO_DB_USER,
        password: process.env.TODO_DB_PW,
        database: 'todos_test'
    },
    migrations: {
        directory:  path.resolve(__dirname,'src','database','migrations')
    },
    useNullAsDefault: true
}