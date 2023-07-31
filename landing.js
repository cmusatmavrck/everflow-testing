document.cookie = `offer_id=${EF.urlParameter('oid')}`;

EF.click({

    transaction_id: EF.urlParameter('_ef_transaction_id'),

    offer_id: EF.urlParameter('oid'),

});