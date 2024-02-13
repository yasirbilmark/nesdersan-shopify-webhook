const insertItems = async (request, item) => {
    const firmNr = process.env.LOGO_FIRM_NR || 123;

    const itemsInsertQuery = `INSERT INTO [dbo].[LG_${firmNr}_ITEMS] (
        ACTIVE, 
        CARDTYPE, 
        CODE, 
        NAME, 
        STGRPCODE, 
        PRODUCERCODE, 
        SPECODE, 
        CYPHCODE, 
        CLASSTYPE, 
        PURCHBRWS, 
        SALESBRWS, 
        MTRLBRWS, 
        VAT, 
        PAYMENTREF, 
        TRACKTYPE, 
        LOCTRACKING, 
        TOOL, 
        AUTOINCSL, 
        DIVLOTSIZE, 
        SHELFLIFE, 
        SHELFDATE, 
        DOMINANTREFS1, 
        DOMINANTREFS2, 
        DOMINANTREFS3, 
        DOMINANTREFS4, 
        DOMINANTREFS5, 
        DOMINANTREFS6, 
        DOMINANTREFS7, 
        DOMINANTREFS8, 
        DOMINANTREFS9, 
        DOMINANTREFS10, 
        DOMINANTREFS11, 
        DOMINANTREFS12, 
        IMAGEINC, 
        TEXTINC, 
        DEPRTYPE, 
        DEPRRATE, 
        DEPRDUR, 
        SALVAGEVAL, 
        REVALFLAG, 
        REVDEPRFLAG, 
        PARTDEP, 
        DEPRTYPE2, 
        DEPRRATE2, 
        DEPRDUR2, 
        REVALFLAG2, 
        REVDEPRFLAG2, 
        PARTDEP2, 
        APPROVED, 
        UNITSETREF, 
        QCCSETREF, 
        DISTAMOUNT, 
        CAPIBLOCK_CREATEDBY, 
        CAPIBLOCK_CREADEDDATE, 
        CAPIBLOCK_CREATEDHOUR, 
        CAPIBLOCK_CREATEDMIN, 
        CAPIBLOCK_CREATEDSEC, 
        CAPIBLOCK_MODIFIEDBY, 
        CAPIBLOCK_MODIFIEDDATE, 
        CAPIBLOCK_MODIFIEDHOUR, 
        CAPIBLOCK_MODIFIEDMIN, 
        CAPIBLOCK_MODIFIEDSEC, 
        SITEID, 
        RECSTATUS, 
        ORGLOGICREF, 
        UNIVID, 
        DISTLOTUNITS, 
        COMBLOTUNITS, 
        WFSTATUS, 
        DISTPOINT, 
        CAMPPOINT, 
        CANUSEINTRNS, 
        ISONR, 
        GROUPNR, 
        PRODCOUNTRY, 
        ADDTAXREF, 
        QPRODAMNT, 
        QPRODUOM, 
        QPRODSRCINDEX, 
        EXTACCESSFLAGS, 
        PACKET, 
        SALVAGEVAL2, 
        SELLVAT, 
        RETURNVAT, 
        LOGOID, 
        LIDCONFIRMED, 
        GTIPCODE, 
        EXPCTGNO, 
        B2CCODE, 
        MARKREF, 
        IMAGE2INC, 
        AVRWHDURATION, 
        EXTCARDFLAGS, 
        MINORDAMOUNT, 
        FREIGHTPLACE, 
        FREIGHTTYPCODE1, 
        FREIGHTTYPCODE2, 
        FREIGHTTYPCODE3, 
        FREIGHTTYPCODE4, 
        FREIGHTTYPCODE5, 
        FREIGHTTYPCODE6, 
        FREIGHTTYPCODE7, 
        FREIGHTTYPCODE8, 
        FREIGHTTYPCODE9, 
        FREIGHTTYPCODE10, 
        STATECODE, 
        STATENAME, 
        EXPCATEGORY, 
        LOSTFACTOR, 
        TEXTINCENG, 
        EANBARCODE, 
        DEPRCLASSTYPE, 
        WFLOWCRDREF, 
        SELLPRVAT, 
        RETURNPRVAT, 
        LOWLEVELCODES1, 
        LOWLEVELCODES2, 
        LOWLEVELCODES3, 
        LOWLEVELCODES4, 
        LOWLEVELCODES5, 
        LOWLEVELCODES6, 
        LOWLEVELCODES7, 
        LOWLEVELCODES8, 
        LOWLEVELCODES9, 
        LOWLEVELCODES10, 
        ORGLOGOID, 
        QPRODDEPART, 
        CANCONFIGURE, 
        CHARSETREF, 
        CANDEDUCT, 
        CONSCODEREF, 
        SPECODE2, 
        SPECODE3, 
        SPECODE4, 
        SPECODE5, 
        EXPENSE, 
        ORIGIN, 
        NAME2, 
        COMPKDVUSE, 
        USEDINPERIODS, 
        EXIMTAX1, 
        EXIMTAX2, 
        EXIMTAX3, 
        EXIMTAX4, 
        EXIMTAX5, 
        PRODUCTLEVEL, 
        APPSPEVATMATRAH, 
        NAME3, 
        FACOSTKEYS, 
        KKLINESDISABLE, 
        APPROVE, 
        APPROVEDATE, 
        GLOBALID, 
        SALEDEDUCTPART1, 
        SALEDEDUCTPART2, 
        PURCDEDUCTPART1, 
        PURCDEDUCTPART2, 
        CATEGORYID, 
        CATEGORYNAME, 
        KEYWORD1, 
        KEYWORD2, 
        KEYWORD3, 
        KEYWORD4, 
        KEYWORD5, 
        DEMANDMEETSORTFLD1, 
        DEMANDMEETSORTFLD2, 
        DEMANDMEETSORTFLD3, 
        DEMANDMEETSORTFLD4, 
        DEMANDMEETSORTFLD5, 
        DEDUCTCODE, 
        PROJECTREF, 
        NAME4, 
        QPRODSUBAMNT, 
        QPRODSUBUOM, 
        QPRODSUBSRCINDEX, 
        QPRODSUBDEPART, 
        PORDAMNTTOLERANCE, 
        SORDAMNTTOLERANCE, 
        MULTIADDTAX, 
        CPACODE, 
        PUBLICCOUNTRYREF, 
        FAUSEFULLIFECODE, 
        FAUSEFULLIFECODE2, 
        MOLD, 
        MOLDLIFETRACKTYPE, 
        MOLDUSAGELIFE, 
        MOLDFACTOR, 
        MOLDMAINTNUMBER, 
        MOLDMAINTLIFETYPE, 
        MOLDMAINTLIFE, 
        MOLDLIFEASRATIO, 
        MOLDMAINTTYPE, 
        MOLDMAINTBEGDATE, 
        MOLDMAINTPERIOD, 
        MOLDMAINTPERUNIT, 
        OBTAINTYPE, 
        GAINTYPE, 
        FORECASTCODE, 
        SALESLIMITQUANTITY, 
        NODISCOUNT, 
        LEVELCONTROL, 
        NOTIFYCRDREF, 
        UETDSTRANSPORTTYPE, 
        UETDSLOADTYPE, 
        UETDSLOADTYPEDEF, 
        UETDSTRANSPORTMODE, 
        UETDSUNCODE, 
        UETDSUNDEF, 
        UETDSLOADUNIT, 
        TSENR, 
        PAYERNAME, 
        PAYERSUBTITLE, 
        PAYERBARCODE, 
        PAYERPURCHPRICE, 
        PAYERSALESPRICE, 
        PAYERID, 
        PAYERACTIVE, 
        PURCHDEDUCTCODE, 
        EXIMREGTYPREF, 
        SALESDISPRATETOT, 
        ADDTAXPURCHBRWS, 
        ADDTAXSALESBRWS, 
        PROFITMARGINRATE, 
        ORDCMPRICETYPECODE, 
        PURCHDISPRATETOT
      ) 
      VALUES (
      0, 
      1, 
      ${item.code}, 
      '${item.name}', 
      '', 
      '', 
      'ozelkod', 
      'yetkikodu', 
      0, 
      1, 
      1, 
      1, 
      20, 
      0, 
      0, 
      0, 
      0, 
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
      GETDATE(), 
      DATEPART(HOUR, GETDATE()), 
      DATEPART(MINUTE, GETDATE()), 
      DATEPART(SECOND, GETDATE()), 
      0, 
      NULL, 
      0, 
      0, 
      0, 
      0, 
      1, 
      0, 
      '', 
      1, 
      1, 
      0, 
      0, 
      0, 
      0, 
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
      20, 
      20, 
      '', 
      0, 
      '', 
      '', 
      '', 
      0, 
      0, 
      0, 
      63, 
      0, 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      0, 
      0, 
      '', 
      '', 
      0, 
      20, 
      20, 
      10, 
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
      0, 
      0, 
      0, 
      0, 
      0, 
      '', 
      '', 
      '', 
      '', 
      0, 
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
      '', 
      0, 
      0, 
      0, 
      NULL, 
      '', 
      0, 
      0, 
      0, 
      0, 
      '', 
      '', 
      '${item.keyword1}', 
      '${item.keyword2}', 
      '${item.keyword3}', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      0, 
      '', 
      0, 
      0, 
      0, 
      0, 
      0, 
      0, 
      0, 
      '', 
      0, 
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
      NULL, 
      0, 
      0, 
      0, 
      0, 
      '', 
      0, 
      0, 
      0, 
      0, 
      2, 
      '', 
      '', 
      1, 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      0, 
      0, 
      '', 
      0, 
      '', 
      0, 
      0, 
      1, 
      1, 
      0, 
      '', 
      0) SELECT SCOPE_IDENTITY() AS ID;`;

    const result = await request.query(itemsInsertQuery);
    return result.recordsets[0][0].ID;
}

module.exports = {
    insertItems
}
