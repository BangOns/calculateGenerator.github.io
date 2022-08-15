//Variabel
const pilihan = document.querySelectorAll(".kotak li img");
const textUtama = document.querySelector(".txtUtama");
const generate = document.querySelector(".buttonGenerate");
// gambar bangun datar
const bangun1 = document.querySelector(".persegiPanjang");
const bangun2 = document.querySelector(".persegi");
const bangun3 = document.querySelector(".segitiga");
const bangun4 = document.querySelector(".lingkaran");
const bangun5 = document.querySelector(".trapesium");
const bangun6 = document.querySelector(".belahKetupat");
const bangun7 = document.querySelector(".layang");
const bangun8 = document.querySelector(".jargen");
// bangun datar
const persegiPan = document.querySelector(".dataPersegiPanjang");
const persegi = document.querySelector(".dataPersegi");
const segitiga = document.querySelector(".dataSegitiga");
const lingkaran = document.querySelector(".dataLingkaran");
const trapesium = document.querySelector(".dataTrapesium");
const belahKetupat = document.querySelector(".dataBelahKetupat");
const layang_layang = document.querySelector(".dataLayang");
const jajarGenjang = document.querySelector(".datajargen");
// inputan dari user
// persegi panjang
const perpanLebar = document.querySelector(".inlebarpp");
const perpanPanjang = document.querySelector(".inpanjangpp");
// persegi
const persegiSisi = document.querySelector('.inputsisi input[type="text"]');
// segitga
const segitigaAlas = document.querySelector('.inputAlas input[type="text"]');
const segitigaTinggi = document.querySelector(
  '.inputTinggi input[type="text"]'
);
// lingkaran
const lingkaranJari = document.querySelector('.inputjari input[type="text"]');
// trapesium
const traAlas = document.querySelector('.inputalasTra input[type="text"]');
const traLebar = document.querySelector('.inputlebarTra input[type="text"]');
const traTinggi = document.querySelector('.inputtinggiTra input[type="text"]');
// belah ketupat
const belahd1 = document.querySelector('.inputd1 input[type="text"]');
const belahd2 = document.querySelector('.inputd2 input[type="text"]');
// layang layang
const layangd1 = document.querySelector('.inputd1layang input[type="text"]');
const layangd2 = document.querySelector('.inputd2layang input[type="text"]');
//Jajar genjang
const jargenAlas = document.querySelector(
  '.inputAlasjargen input[type="text"]'
);
const jargenTinggi = document.querySelector(
  '.inputTinggijargen input[type="text"]'
);
// user Memilih bangun datar
pilihan.forEach(function (pilih) {
  pilih.addEventListener("click", function (e) {
    generate.style.display = "block";
    textUtama.style.display = "none";
    if (e.target.className == "persegiPanjang") {
      persegiPan.style.display = "block";
      // data bangun datar
      persegi.style.display = "none";
      segitiga.style.display = "none";
      lingkaran.style.display = "none";
      trapesium.style.display = "none";
      belahKetupat.style.display = "none";
      layang_layang.style.display = "none";
      jajarGenjang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "0";
      bangun2.style.opacity = "1";
      bangun3.style.opacity = "1";
      bangun4.style.opacity = "1";
      bangun5.style.opacity = "1";
      bangun6.style.opacity = "1";
      bangun7.style.opacity = "1";
      bangun8.style.opacity = "1";
      // menjalankan rumus
      generate.addEventListener("click", function () {
        RumuspersegiPanjang(perpanPanjang.value, perpanLebar.value);
      });
    } else if (e.target.className == "persegi") {
      persegi.style.display = "block";
      // data bangun datar
      persegiPan.style.display = "none";
      segitiga.style.display = "none";
      lingkaran.style.display = "none";
      trapesium.style.display = "none";
      belahKetupat.style.display = "none";
      layang_layang.style.display = "none";
      jajarGenjang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "1";
      bangun2.style.opacity = "0";
      bangun3.style.opacity = "1";
      bangun4.style.opacity = "1";
      bangun5.style.opacity = "1";
      bangun6.style.opacity = "1";
      bangun7.style.opacity = "1";
      bangun8.style.opacity = "1";
      generate.addEventListener("click", function () {
        Rumuspersegi(persegiSisi.value);
      });
    } else if (e.target.className == "segitiga") {
      segitiga.style.display = "block";
      // data bangun datar
      persegiPan.style.display = "none";
      persegi.style.display = "none";
      lingkaran.style.display = "none";
      trapesium.style.display = "none";
      belahKetupat.style.display = "none";
      layang_layang.style.display = "none";
      jajarGenjang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "1";
      bangun2.style.opacity = "1";
      bangun3.style.opacity = "0";
      bangun4.style.opacity = "1";
      bangun5.style.opacity = "1";
      bangun6.style.opacity = "1";
      bangun7.style.opacity = "1";
      bangun8.style.opacity = "1";
      generate.addEventListener("click", function () {
        RumusSegitiga(segitigaAlas.value, segitigaTinggi.value);
      });
    } else if (e.target.className == "lingkaran") {
      lingkaran.style.display = "block";
      // data bangun datar
      persegiPan.style.display = "none";
      persegi.style.display = "none";
      segitiga.style.display = "none";
      trapesium.style.display = "none";
      belahKetupat.style.display = "none";
      layang_layang.style.display = "none";
      jajarGenjang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "1";
      bangun2.style.opacity = "1";
      bangun3.style.opacity = "1";
      bangun4.style.opacity = "0";
      bangun5.style.opacity = "1";
      bangun6.style.opacity = "1";
      bangun7.style.opacity = "1";
      bangun8.style.opacity = "1";
      generate.addEventListener("click", function () {
        Rumuslingkaran(lingkaranJari.value);
      });
    } else if (e.target.className == "trapesium") {
      trapesium.style.display = "block";
      // data bangun datar
      persegiPan.style.display = "none";
      persegi.style.display = "none";
      segitiga.style.display = "none";
      lingkaran.style.display = "none";
      belahKetupat.style.display = "none";
      layang_layang.style.display = "none";
      jajarGenjang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "1";
      bangun2.style.opacity = "1";
      bangun3.style.opacity = "1";
      bangun4.style.opacity = "1";
      bangun5.style.opacity = "0";
      bangun6.style.opacity = "1";
      bangun7.style.opacity = "1";
      bangun8.style.opacity = "1";
      generate.addEventListener("click", function () {
        RumusTrapesium(traAlas.value, traTinggi.value, traLebar.value);
      });
    } else if (e.target.className == "belahKetupat") {
      belahKetupat.style.display = "block";
      // data bangun datar
      persegiPan.style.display = "none";
      persegi.style.display = "none";
      segitiga.style.display = "none";
      lingkaran.style.display = "none";
      trapesium.style.display = "none";
      layang_layang.style.display = "none";
      jajarGenjang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "1";
      bangun2.style.opacity = "1";
      bangun3.style.opacity = "1";
      bangun4.style.opacity = "1";
      bangun5.style.opacity = "1";
      bangun6.style.opacity = "0";
      bangun7.style.opacity = "1";
      bangun8.style.opacity = "1";
      generate.addEventListener("click", function () {
        RumusBelahKetupat(belahd1.value, belahd2.value);
      });
    } else if (e.target.className == "layang") {
      layang_layang.style.display = "block";
      // data bangun datar
      persegiPan.style.display = "none";
      persegi.style.display = "none";
      segitiga.style.display = "none";
      lingkaran.style.display = "none";
      trapesium.style.display = "none";
      belahKetupat.style.display = "none";
      jajarGenjang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "1";
      bangun2.style.opacity = "1";
      bangun3.style.opacity = "1";
      bangun4.style.opacity = "1";
      bangun5.style.opacity = "1";
      bangun6.style.opacity = "1";
      bangun7.style.opacity = "0";
      bangun8.style.opacity = "1";
      generate.addEventListener("click", function () {
        RumusLayang(layangd1.value, layangd2.value);
      });
    } else if (e.target.className == "jargen") {
      jajarGenjang.style.display = "block";
      // data bangun datar
      persegiPan.style.display = "none";
      persegi.style.display = "none";
      segitiga.style.display = "none";
      lingkaran.style.display = "none";
      trapesium.style.display = "none";
      belahKetupat.style.display = "none";
      layang_layang.style.display = "none";
      // gambar bangun datar
      bangun1.style.opacity = "1";
      bangun2.style.opacity = "1";
      bangun3.style.opacity = "1";
      bangun4.style.opacity = "1";
      bangun5.style.opacity = "1";
      bangun6.style.opacity = "1";
      bangun7.style.opacity = "1";
      bangun8.style.opacity = "0";
      generate.addEventListener("click", function () {
        RumusJargen(jargenAlas.value, jargenTinggi.value);
      });
    }
  });
});

// menjalankan fungsi
// persegi panjang
const reg = /[a-zA-Z]/gi;

function RumuspersegiPanjang(p, l) {
  if (p == "" || l == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (reg.test(p) == true || reg.test(l) == true) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${p * l}</h1>`,
      text: `${perpanPanjang.value} x ${perpanLebar.value}`,
    });
  }
}

// persegi

function Rumuspersegi(s) {
  if (s == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (reg.test(s) == true) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${s * s}</h1>`,
      text: `${persegiSisi.value} x ${persegiSisi.value}`,
    });
  }
}

// segitiga
function RumusSegitiga(a, t) {
  if (a == "" || t == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (reg.test(a) == true || reg.test(t) == true) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${0.5 * (a * t)}</h1>`,
      text: `1/3 x (${segitigaAlas.value} x ${segitigaTinggi.value})`,
    });
  }
}

// lingkaran
function Rumuslingkaran(jari) {
  if (jari == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (reg.test(jari) == true) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${3.14 * (jari * jari)}</h1>`,
      text: `3.14 x (${lingkaranJari.value} x ${lingkaranJari.value})`,
    });
  }
}

// lingkaran

function RumusTrapesium(a, t, l) {
  if (a == "" || t == "" || l == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (
    reg.test(a) == true ||
    reg.test(t) == true ||
    reg.test(l) == true
  ) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${0.5 * t * (a + l)}</h1>`,
      text: `1/2 x ${traTinggi.value} (${traAlas.value} x ${traLebar.value})`,
    });
  }
}

// belah ketupat
function RumusBelahKetupat(d1, d2) {
  if (d1 == "" || d2 == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (reg.test(d1) == true || reg.test(d2) == true) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${0.5 * (d1 * d2)}</h1>`,
      text: `1/2 x (${belahd1.value} x ${belahd2.value})`,
    });
  }
}

// layang - layang
function RumusLayang(d1, d2) {
  if (d1 == "" || d2 == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (reg.test(d1) == true || reg.test(d2) == true) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${0.5 * (d1 * d2)}</h1>`,
      text: `1/2 x (${layangd1.value} x ${layangd2.value})`,
    });
  }
}

function RumusJargen(a, t) {
  if (a == "" || t == "") {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "Wah Ada yang Kosong tuh",
    });
  } else if (reg.test(a) == true || reg.test(t) == true) {
    Swal.fire({
      icon: "warning",
      title: "Oopss",
      text: "masukkan angka yang benar",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<h1 class="textHasil">${a * t}</h1>`,
      text: `${jargenAlas.value} x ${jargenTinggi.value}`,
    });
  }
}
