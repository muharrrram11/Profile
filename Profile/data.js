const nama = "muhammad arif ramadhan";
let usia = 30;

let biodata = document.getElementById('biodata');
console.log(biodata)

function biodataKedua() {
  if (usia >= 0 && usia <= 3) {
    console.log("Kategori Batita");
  } else if (usia >= 4 && usia <= 5) {
    console.log("Kategori Balita");
  } else if (usia >= 6 && usia <= 11) {
    console.log("Kategori Anak-anak");
  } else if (usia >= 12 && usia <= 19) {
    console.log("Kategori Remaja");
  } else if (usia >= 20 && usia <= 35) {
    console.log("Kategori Pemuda");
  } else if (usia >= 36 && usia <= 40) {
    console.log("Kateogri Dewasa");
  } else if (usia >= 41 && usia <= 50) {
    console.log("Kategori Tua");
  } else {
    console.log("Kategori Sepuh");
  }
}

function biodata() {
    let generasi;

    if (usia >= 0 && usia <= 3) {
      generasi ="Kategori Batita";
    } else if (usia >= 4 && usia <= 5) {
      generasi ="Kategori Balita";
    } else if (usia >= 6 && usia <= 11) {
      generasi ="Kategori Anak-anak";
    } else if (usia >= 12 && usia <= 19) {
      generasi ="Kategori Remaja";
    } else if (usia >= 20 && usia <= 35) {
      generasi ="Kategori Pemuda";
    } else if (usia >= 36 && usia <= 40) {
      generasi ="Kategori Dewasa";
    } else if (usia >= 41 && usia <= 50) {
      generasi ="Kategori Tua";
    } else {
      generasi ="Kategori Sepuh";
    }

    return biodata.innerHTML = generasi;
  }

console.log(nama);
console.log(usia);
biodataKedua();

biodata();
