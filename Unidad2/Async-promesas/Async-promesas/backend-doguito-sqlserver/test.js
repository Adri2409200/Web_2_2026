const { getConnection } = require('./config/db.js');

async function test() {
    console.log('Probando conexion...');
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT GETDATE() as fecha');
        
        console.log('CONEXION EXITOSA!');
        console.log('Fecha:', result.recordset[0].fecha);
        
        process.exit(0);
    } catch (error) {
        console.error('ERROR:', error.message);
        process.exit(1);
    }
}

test();
