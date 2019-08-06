var prices = [];
var names = [];
$(".add").click(function() {
    var product = $(".thing").val();
    var price = $(".dollars").val();
        price = parseInt(price);
    names.push(product);
    $(".space").append(`<div class="labels">
            <p>${product}</p>
            <p>${price}</p>
        </div>`);
    $(".numberOfItems").html(names.length);
    prices.push(price);
    var totalPrice = 0;
    prices.forEach(function(cost) {
        totalPrice = totalPrice + cost;
        $(".total").html(totalPrice);
    });
$(".buy").click(function() {
    alert("Your total is " + "" + "$" + totalPrice + "." + "" + "" + " Thank you for purchasing a " + "" + product + "" + " and all of your other items!");
});
});
