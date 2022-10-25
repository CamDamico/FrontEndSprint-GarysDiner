var quantity = document.querySelector("Item");

quantity.addEventListener("submit", function (evt) {
  var quantity1 = document.querySelector("Item1").value;
  var result = `Item 1 x ${quantity1}`;

  var quantity2 = document.querySelector("Item2").value;
  var result = `Item 2 x ${quantity2}`;

  var quantity3 = document.querySelector("Item3").value;
  var result = `Item 3 x ${quantity3}`;

  var quantity4 = document.querySelector("Item4").value;
  var result = `Item 4 x ${quantity4}`;

  var quantity5 = document.querySelector("Item5").value;
  var result = `Item 5 x ${quantity5}`;

  var quantity6 = document.querySelector("Item6").value;
  var result = `Item 6 x ${quantity6}`;

  evt.preventDefault;
});

var order = document.querySelector("Payment");

order.addEventListener("submit", function (evt) {
  var name = document.querySelector("Name").value;
  var NameResult = name;

  var Address = document.querySelector("Addr").value;
  var AddResult = Address;

  var credit = document.querySelector("Cred").value;
  var CredResult = credit;

  var PhoneNumber = document.querySelector("PhoneNum").value;
  var PhoneNumResult = PhoneNumber;
});
