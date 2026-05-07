import sql from 'mssql/msnodesqlv8.js';

const config = {
  driver: 'ODBC Driver 18 for SQL Server',
  server: process.env.SQLSERVER_SERVER || 'ADRIANA\\SQL_DEVELOPER_AD',
  database: process.env.SQLSERVER_DATABASE || 'doguito_db',
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    encrypt: false,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

export { sql, poolPromise };