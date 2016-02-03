BankAccounts = new Mongo.Collection("bank_accounts");
CreditCards = new Mongo.Collection("credit_cards");
Purchases = new Mongo.Collection("purchases");

//console.log('Usted tiene ' + BankAccounts.find().count() + ' cuentas registradas.');

if (Meteor.isClient) {


/*if(CreditCards.find().count() == 1 )
{
  CreditCards.insert(
    {
      name: 'Santander', //nombre | descripcion
      nextPayment:new Date(), // fecha siguiente pago
      amountNextPayment:0,    // proximo pago
      totalDebt: 50000,       //deuda total
      remainingDebt: 50000,   //deuda restante
      creditLimit: 50000,     //limite de credito
      creditAvailable:0,      //credito disponible
      

      creationDate: new Date()

    });
}

if(Purchases.find().count() == 0 )
{
  Purchases.insert(
    {
      description: 'Ipod 18 meses', //nombre | descripcion
      monthPayment: new Date(), // pago
      totalAmount: 2250,    // deuda total
      numberOfPayments: 12,       //numero de pagos
      remainingDebt: 1118,   //deuda restante
      idCreditCard: 'fGTTcTykxdHgGtAhr',  //
      isInterestFree: true,  // meses sin intereses
      creationDate: new Date()

    });
}*/

  
  Template.accounts.helpers({bank_accounts: BankAccounts.find()});

  Template.creditCards.helpers({credit_cards: CreditCards.find()});

  Template.purchases.helpers({purchases: Purchases.find()});

  Template.add_account.events({
    'submit .js-add-account':function(event){
      var name, amount;

      nm = event.target._name.value;
      amnt = event.target._amount.value;

      console.log(nm + ", " + amnt);

      BankAccounts.insert(
      {
        name:nm,
        amount:amnt,
        creationDate: new Date()
      });


      return false;
    }
  });


//Helpers

  Template.registerHelper('formatDate', function(date){

    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return  date.getDate() + "/" + months[date.getMonth()] + "/" + date.getFullYear();

  });
}

if (Meteor.isServer) {
  console.log("i am the server"); 
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
