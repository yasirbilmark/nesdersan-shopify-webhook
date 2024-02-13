const sql = require('mssql');
const logger = require('../../config/logger');

const { insertItems } = require('./ITEMS');
const { insertItmclasas } = require('./ITMCLASAS');
const { insertItmfactp } = require('./ITMFACTP');
const { insertItmunita } = require('./ITMUNITA');
const mssqlConfig = require('../../config/mssql');

const insertItem = async (item) => {
    const dbConn = new sql.ConnectionPool(mssqlConfig);

    await dbConn.connect();

    let transaction;
    try {
        transaction = new sql.Transaction(dbConn);
        await transaction.begin();

        const request = new sql.Request(transaction);

        const logicalRef = await insertItems(request, item)
        await insertItmclasas(request, logicalRef)
        await insertItmfactp(request, logicalRef)
        await insertItmunita(request, logicalRef)

        await transaction.commit();

        logger.log({
            level: 'info',
            message: `Item inserted successfully. LogicalRef: ${logicalRef}`,
        });

        return logicalRef;
    } catch (err) {
        if (transaction) {
            await transaction.rollback();
        }

        logger.log({
            level: 'error',
            message: err.message,
        });
    } finally {
        await dbConn.close();
    }
};

module.exports = {
    insertItem
}
