const insertItmfactp = async (request, logicalRef) => {
    const firmNr = process.env.LOGO_FIRM_NR || 123;

    const itmfactpInsertQuery = `INSERT INTO [dbo].[LG_${firmNr}_ITMFACTP] (
        FACTORYNR,
        ITEMREF,
        SPECIALIZED,
        PROCURECLASS,
        LOWLEVELCODE,
        DIVLOTSIZE,
        MRPCNTRL,
        PLANPOLICY,
        LOTSIZINGMTD,
        FIXEDLOTSIZE,
        YIELD,
        MINORDERQTY,
        MAXORDERQTY,
        MULTORDERQTY,
        MINORDERDAY,
        MAXORDERDAY,
        REORDERPOINT,
        AUTOMTRISSUE,
        PLANNERREF,
        BUYERREF,
        SELADMINREF,
        CSTANALYSTREF,
        DEFSERILOTNO,
        AUTOLOTOUTMTD,
        LOTPARTY,
        OUTLOTSIZE,
        COUNTFORMPS,
        LOTSIZINGMTD2,
        FIXEDLOTSIZE2,
        YIELD2,
        MINORDERQTY2,
        MAXORDERQTY2,
        MULTORDERQTY2,
        CHECKALLINVENS,
        PRODUCTIONFACT,
        PROCUREINVEN,
        VARIANTREF) 
        VALUES (
        0,
        ${logicalRef},
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        '',
        '',
        '',
        '',
        '',
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    )`;

    const result = await request.query(itmfactpInsertQuery);

    return result.recordsets;
}

module.exports = {
    insertItmfactp
}
