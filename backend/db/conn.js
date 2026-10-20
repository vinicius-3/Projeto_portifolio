import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const db = mysql;createConnection({
    host:process.env.DB_HOST;
    user:process.env.DB_USER;
    password:process.env.DB_PASWORD;
    database:process.env.DB_NAME;

});
db.Connect((err)->{
    if(err){
        console.error("Erro ao conectar Banco de dados". err);
        return;
    }
    console.log("Conectou com o banco de dados");
});