const insertItmunita = async (request, logicalRef) => {
    const firmNr = process.env.LOGO_FIRM_NR || 123;

    const itmunitaInsertQuery = `
                INSERT INTO [dbo].[LG_${firmNr}_ITMUNITA] (
                    ITEMREF,
                    LINENR,
                    UNITLINEREF,
                    BARCODE,
                    MTRLCLAS,
                    PURCHCLAS,
                    SALESCLAS,
                    MTRLPRIORITY,
                    PURCHPRIORTY,
                    SALESPRIORITY,
                    WIDTH,
                    LENGTH,
                    HEIGHT,
                    AREA,
                    VOLUME_,
                    WEIGHT,
                    WIDTHREF,
                    LENGTHREF,
                    HEIGHTREF,
                    AREAREF,
                    VOLUMEREF,
                    WEIGHTREF,
                    GROSSVOLUME,
                    GROSSWEIGHT,
                    GROSSVOLREF,
                    GROSSWGHTREF,
                    CONVFACT1,
                    CONVFACT2,
                    EXTACCESSFLAGS,
                    SITEID,
                    RECSTATUS,
                    ORGLOGICREF,
                    BARCODE2,
                    BARCODE3,
                    WBARCODE,
                    WBARCODESHIFT,
                    VARIANTREF,
                    GLOBALID
                ) VALUES (
                    ${logicalRef},
                    1,
                    24,
                    '',
                    1,
                    1,
                    1,
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
                    0,
                    0,
                    0,
                    1,
                    1,
                    0,
                    0,
                    1,
                    0,
                    '',
                    '',
                    '',
                    0,
                    0,
                    '');`;

    const result = await request.query(itmunitaInsertQuery);

    return result.recordsets;
}

module.exports = {
    insertItmunita
}
