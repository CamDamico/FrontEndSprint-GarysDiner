














// var reviews = document.querySelector("#spot");
// reviews.addEventListener("click", function (evt){
//     reviews.innerText = "Cool";
//     document.querySelector("#spot").innerText = "Lit"
//     document.querySelector("#spot").innerText = "Cool"
    
//     evt.preventDefault();
// });


var custReviews = [ "Greatest Food In The Bay!- John Cena",
"The food is 10/10! Would eat again! - IGN ", 
"Such an amazing place - Brandon Whalen ","The Fries Are The Best! - Nathan Grren! ","The Burgers Are So Good!- Cameron D'amico","The MilkShakes Are To Die For - Jordan Kelloway", "The Sushi Is Gucci - Maurice Babin "

  ];

var myReviews = document.querySelector("#reviews");

myReviews.addEventListener("click", function (evt) {
  myReviews.innerText = nextCatImageUrl();
  console.log("Hello!")

  evt.preventDefault();
});

var currentCatIndex = 0;

function nextCatImageUrl() {
  
  if (currentCatIndex > custReviews.length -1 ) {
    currentCatIndex = 0;
    
    
  }
  return custReviews[currentCatIndex++];
}

// var loadCats = document.querySelector("#loadCa");

