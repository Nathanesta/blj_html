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

// card-task2
const daftarmakanan = [
{ nama: "Es Kopi Susu", harga: 10000 },
{ nama: "Roti Bakar", harga: 25000 },
{ nama: "Ice Cream", harga: 15000 }
];
document.getElementById("makanan1").innerHTML = daftarmakanan[0].nama + " : " + daftarmakanan[0].harga;
document.getElementById("makanan2").innerHTML = daftarmakanan[1].nama + " : " + daftarmakanan[1].harga;
document.getElementById("makanan3").innerHTML = daftarmakanan[2].nama + " : " + daftarmakanan[2].harga;
let totals = daftarmakanan[0].harga + daftarmakanan[1].harga + daftarmakanan[2].harga;
document.getElementById("totals").innerHTML = "Total Harga : " +totals;
const diskons = 10/100;
let stlhdiskon  = total - (total * diskons);
document.getElementById("totalds").innerHTML = "Total Harga Setelah Diskon : " +stlhdiskon;
daftarmakanan[2].nama = "Tahu Telor";
document.getElementById("makanan3").innerHTML = daftarmakanan[2].nama + " : " + daftarmakanan[2].harga;
daftarmakanan.push({ nama: "Nasi Goreng", harga: 12000 });
document.getElementById("makanan4").innerHTML = daftarmakanan[3].nama + " : " + daftarmakanan[3].harga;
let total_harga = daftarmakanan[3].harga + stlhdiskon;
document.getElementById("totalharga").innerHTML = "Total Harga : " +total_harga;