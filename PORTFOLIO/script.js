// profil
const tprofil = document.querySelector('.container .header .list li:nth-child(2) a');
const profil = document.getElementById('profil');
const judulprofil = document.querySelector('.container .main h2:nth-child(3)');

tprofil.addEventListener('click', () => {
  profil.classList.add('muncul');
});

judulprofil.onclick = function profilmuncul() {
  profil.classList.toggle('muncul');
};

// kemampuan
const tkemampuan = document.querySelector('.container .header .list li:nth-child(3) a');
const kemampuan = document.getElementById('kemampuan');
const judulkemampuan = document.querySelector('.container .main h2:nth-child(5)');

tkemampuan.addEventListener('click', () => {
  kemampuan.classList.add('muncul');
});

judulkemampuan.onclick = function kemampuanmuncul() {
  kemampuan.classList.toggle('muncul');
};

// pengalaman
const tpengalaman = document.querySelector('.container .header .list li:nth-child(4) a');
const pengalaman = document.getElementById('pengalaman');
const judulpengalaman = document.querySelector('.container .main h2:nth-child(7)');

tpengalaman.addEventListener('click', () => {
  pengalaman.classList.add('muncul');
});

judulpengalaman.onclick = function pengalamanmuncul() {
  pengalaman.classList.toggle('muncul');
};

// pendidikan
const tpendidikan = document.querySelector('.container .header .list li:nth-child(5) a');
const pendidikan = document.getElementById('pendidikan');
const judulpendidikan = document.querySelector('.container .main h2:nth-child(9)');

tpendidikan.addEventListener('click', () => {
  pendidikan.classList.add('muncul');
});

judulpendidikan.onclick = function pendidikanmuncul() {
  pendidikan.classList.toggle('muncul');
};
