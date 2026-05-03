import myslq from 'mysql2/promise';//LIBRERÍA PARA CONEXIÓN A BASE DE DATOS MYSQL, PROMESAS
import { Pool } from 'pg'; //LIBRERÍA PARA CONEXIÓN A BASE DE DATOS POSTGRESQL (SUPABASE)
import dotenv from 'dotenv';    //LIBRERÍA PARA usar las VARIABLES DE ENTORNO DESDE UN ARCHIVO .env
dotenv.config();

// Conexión a MySQL (XAMPP) - Descomenta esta sección para usar XAMPP
const pool = myslq.createPool({
    host: process.env.DB_HOST, //localhost
    user: process.env.DB_USER, //root
    password: process.env.DB_PASSWORD, //contraseña de mysql
    database: process.env.DB_NAME, //nombre de la base de datos
    port: process.env.DB_PORT, //puerto de mysql
    waitForConnections: true,
    connectionLimit: 10,
});//saque los datos de conexión a la base de datos del archivo .env

// Conexión a PostgreSQL (Supabase) - Descomenta esta sección para usar Supabase
/*
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // URL de conexión de Supabase
    ssl: {
        rejectUnauthorized: false // Necesario para Supabase
    }
});

pool.on('connect', () => {
    console.log('Conectado a la base de datos');
});

pool.on('error', (err) => {
    console.error('Error en la conexión a la base de datos:', err);
});
*/

pool.getConnection().then((conn) => {
    console.log('Todo bien')
    conn.release();
}).catch((err) => console.error("todo mal", err.message));
export default pool;