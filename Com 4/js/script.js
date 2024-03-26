//card-task
const makanan1 = 10000;
const makanan2 = 25000;
const makanan3 = 15000;
let total = makanan1 + makanan2 + makanan3;
document.getElementById("list1").innerHTML = "Es Kopi Susu : Rp." +makanan1;  
document.getElementById("list2").innerHTML = "Roti Bakar : Rp." +makanan2;       
document.getElementById("list3").innerHTML = "Ice Cream : Rp." +makanan3;              
document.getElementById("total").innerHTML = "Harga semua setelah dijumlah : Rp." + total;
const diskon = 10/100;
let total_pembayaran  = total - (total * diskon);
document.getElementById("total2").innerHTML = "Harga makanan setelah diskon : Rp." + total_pembayaran;

