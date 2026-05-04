const sql = require('mssql');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dbConfig = {
    server: 'ADRIANA\\SQL_DEVELOPER_AD',
    database: 'doguito_db',
    user: 'doguito_user',
    password: 'Doguito2024!',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true
    }
};

console.log('✅ Configuración de BD cargada');

let pool = null;

const getConnection = async () => {
    try {
        if (!pool) {
            pool = await sql.connect(dbConfig);
            console.log('✅ Conectado a SQL Server');
        }
        return pool;
    } catch (error) {
        console.error('❌ Error de conexión:', error.message);
        throw error;
    }
};

const poolPromise = getConnection();

module.exports = { getConnection, poolPromise };