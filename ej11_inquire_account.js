load('utils.js');
load('card_prototype_extension.js');

ej11 = {
    main : function() {

	var card = new Card();
	var atr = card.reset(Card.RESET_COLD);

	//print('AUTHENTICATED: ' + card.authenticate());
	var resp = card.inquireAccount(2, new ByteString('00 00 00 00', HEX));
	print(resp.status);
	
	resp = card.getInquireAccountResponse(new ByteString('00 00 00 00', HEX), 2);
	print (resp.data);
	print(resp.status);
	if (resp.status === '9000'){
	    print('MAC:           ' + resp.MAC);
	    print('Trans. Type:   ' + resp.transType);
	    print('Balance:       ' + resp.balance);
	    print('ATREF:         ' + resp.atref);
	    print('Max. Balance:  ' + resp.maxBalance);
	    print('Credit Entity: ' + resp.creditEntity);
	    print('Debit Entity:  ' + resp.debitEntity);
	}
    }

};

//ej11.main();
//readcard();