const arrayObjectPegawai = require("./data-customer.json");

// hasilLooping Penggabungan Nama dibawah ini
let index = 0;
while (index < arrayObjectPegawai.length) {
  const hasilLooping =
    "Nama : " +
    arrayObjectPegawai[index].namaDepan +
    " " +
    arrayObjectPegawai[index].namaBelakang;
  console.log(hasilLooping);
  index += 1;
}

console.log("==================================================");

//mencari jumlahPria [M]
let jumlahPria = 0;
for (var i = 0; i < arrayObjectPegawai.length; ++i) {
  if (arrayObjectPegawai[i].jenisKelamin == "M") jumlahPria++;
}
console.log(jumlahPria);

console.log("==================================================");

//mencari jumlahPria [f]
let jumlahWanita = 0;
for (var i = 0; i < arrayObjectPegawai.length; ++i) {
  if (arrayObjectPegawai[i].jenisKelamin == "F") jumlahWanita++;
}
console.log(jumlahWanita);

console.log("==================================================");

//membandingkan jumlah pegawai Pria dan jumlah pegawai Wanita
if (jumlahPria > jumlahWanita) {
  const komentar = "Jumlah Pria lebih banyak dari Wanita";
  console.log(komentar);
} else if (jumlahWanita > jumlahPria) {
  const komentar = "Jumlah Wanita lebih banyak dari Pria";
  console.log(komentar);
} else if (jumlahPria == jumlahWanita) {
  const komentar = "Jumlah Pria dan Wanita berimbang";
  console.log(komentar);
}

console.log("==================================================");
