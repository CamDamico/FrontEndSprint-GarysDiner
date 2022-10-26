function calculateTotal() {
  let UnitPrice = {
    BigGary: 12,
    BatteredWings: 15,
    GarysFries: 8,
    ChickenSalad: 13,
    RaspberryTart: 9,
    ChocolateFudge: 11,
  };
  let ItemPrice = {};

  ItemPrice.BigGary = $("#BigGary").value() * UnitPrice.BigGary;
  $("#PriceBigGary").value(ItemPrice.BigGary);

  ItemPrice.BatteredWings =
    $("#BatteredWings").value() * UnitPrice.BatteredWings;
  $("#PriceBatWings").value(ItemPrice.BatteredWings);

  ItemPrice.GarysFries = $("#GarysFries").value() * UnitPrice.GarysFries;
  $("#PriceGarysFries").value(ItemPrice.GarysFries);

  ItemPrice.ChickenSalad = $("#ChickenSalad").value() * UnitPrice.ChickenSalad;
  $("#PriceChickenSalad").value(ItemPrice.ChickenSalad);

  ItemPrice.RaspberryTart =
    $("#RaspberryTart").value() * UnitPrice.RaspberryTart;
  $("#PriceRaspTart").value(ItemPrice.RaspberryTart);

  ItemPrice.ChocolateFudge = $("#ChocFudge").value() * UnitPrice.ChocolateFudge;
  $("#PriceChocFudge").value(ItemPrice.ChocolateFudge);

  let Total =
    ItemPrice.BigGary +
    ItemPrice.BatteredWings +
    ItemPrice.GarysFries +
    ItemPrice.ChickenSalad +
    ItemPrice.RaspberryTart +
    ItemPrice.ChocolateFudge;

  $("#TotVal").text(Total);
}

$(function () {
  $(".qty").on("change keyup", calculateTotal);
});
