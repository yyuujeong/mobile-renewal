let sell_price;
sell_price = document.form.sell_price.value;
document.form.sum.value = Number(sell_price).toLocaleString();

$(".plus").on("click", function() {
  hm = document.form.amount;
  sum = document.form.sum;
  hm.value++;
  sum.value = Number(hm.value * sell_price).toLocaleString();
});
$(".minus").on("click", function() {
  hm = document.form.amount;
  sum = document.form.sum;
  if(hm.value > 1) {
    hm.value--;
    sum.value = Number(hm.value * sell_price).toLocaleString();
  }
});




































// var sell_price;
// 		var amount; 

//         function init() {
// 			sell_price = document.form.sell_price.value;
// 			document.form.sum.value = Number(sell_price).toLocaleString();
// 		}

// 		function add() {
// 			hm = document.form.amount;
// 			sum = document.form.sum;
// 			hm.value++;
// 			sum.value = (Number(hm.value) * sell_price).toLocaleString();
// 		}
// 		function del() {
// 			hm = document.form.amount;
// 			sum = document.form.sum;
// 			if(hm.value > 1) { 
// 				hm.value--; 
// 				sum.value = (Number(hm.value) * sell_price).toLocaleString();
// 			}
// 		}