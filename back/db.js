import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "L12@1337a",
    database: "cadastro_usuarios_2"
})