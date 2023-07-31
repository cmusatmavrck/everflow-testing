const offerId = document.cookie.match(/offer_id=(\d+)/)[1];

EF.conversion({

    offer_id: offerId,

    transaction_id: EF.getTransactionId(offerId),

    amount: 10,

});