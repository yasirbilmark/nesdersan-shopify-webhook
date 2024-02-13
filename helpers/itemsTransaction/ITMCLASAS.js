const insertItmclasas = async (request, logicalRef) => {
    const firmNr = process.env.LOGO_FIRM_NR || 123;

    const itmclsasInsertQuery = `INSERT INTO [dbo].[LG_${firmNr}_ITMCLSAS] (
        PARENTREF,
        CHILDREF,
        UPLEVEL,
        SITEID,
        RECSTATUS,
        ORGLOGICREF
        )
        VALUES (
        0,
        ${logicalRef},
        0,
        '',
        0,
        0
        )`;

    const result = await request.query(itmclsasInsertQuery);

    return result.recordsets;
}

module.exports = {
    insertItmclasas
}
