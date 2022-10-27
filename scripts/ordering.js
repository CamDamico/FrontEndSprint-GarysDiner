function calculateTotal() {
  let unit_price = {
    BatteredWings: 12.99,
    ChickenSalad: 13.99,
    BigGary: 10.99,
    Fries: 4.99,
    RaspberryTart: 3.99,
    ChocolateFudgeBrownie: 2.99,
  };
  let item_price = {};

  item_price.BatteredWings =
    $("#qty_BatteredWings").val() * unit_price.BatteredWings;
  $("#price_BatteredWings").val(item_price.BatteredWings);

  item_price.ChickenSalad = $("#qty_salad").val() * unit_price.ChickenSalad;
  $("#price_salad").val(item_price.ChickenSalad);

  item_price.BigGary = $("#qty_BigGary").val() * unit_price.BigGary;
  $("#price_BigGary").val(item_price.BigGary);

  item_price.Fries = $("#qty_Fries").val() * unit_price.Fries;
  $("#price_Fries").val(item_price.Fries);

  item_price.RaspberryTart = $("#qty_tart").val() * unit_price.RaspberryTart;
  $("#price_tart").val(item_price.RaspberryTart);

  item_price.ChocolateFudgeBrownie =
    $("#qty_Brownie").val() * unit_price.ChocolateFudgeBrownie;
  $("#price_Brownie").val(item_price.ChocolateFudgeBrownie);

  let total =
    item_price.BatteredWings +
    item_price.ChickenSalad +
    item_price.BigGary +
    item_price.Fries +
    item_price.RaspberryTart +
    item_price.ChocolateFudgeBrownie;

  $("#total_value").text(total);
}

$(function () {
  $(".qty").on("change keyup", calculateTotal);
});
