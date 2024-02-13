const mssqlConfig = {
    type: 'mssql',
    server: 'localhost',
    port: 1433,
    user: 'admin',
    password: 'admin123',
    database: 'LOGO',
    synchronize: true,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

module.exports = mssqlConfig;
