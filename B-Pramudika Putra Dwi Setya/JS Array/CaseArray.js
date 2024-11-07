//Array Antrian
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian awal:", antrian);

//Tambah Antrian
antrian.push("Nabila");
antrian.push("Maza", "Elsi");
console.log("Antrian tambahan:", antrian);

//Kak Elsi Pulang
antrian.pop();
console.log("Antrian setelah Kak Elsi Pulang:", antrian);

//Antrian 1 dan 2 Pulang
antrian.shift();
antrian.shift();
console.log("Antrian setelah Antrian 1 dan 2 Pulang:", antrian);

//Antrian Akhir
antrian.unshift("Tomi");
console.log("Antrian akhir:", antrian);
