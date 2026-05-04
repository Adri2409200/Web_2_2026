const sql = require('mssql');

const config = {
    server: 'ADRIANA\\SQL_DEVELOPER_AD',
    database: 'doguito_db',
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
        encrypt: false,
        connectionTimeout: 30000
    },
    authentication: {
        type: 'ntlm'
    }
};

console.log('Conectando con autenticación de Windows...');
console.log('Usuario:', process.env.USERNAME);

async function conectar() {
    try {
        const pool = await sql.connect(config);
        console.log('✅ CONEXION EXITOSA!');
        process.exit(0);
    } catch (error) {
        console.error('❌ ERROR:', error.message);
        process.exit(1);
    }
}

conectar();