function evaluasi_nomor() {
  const nomor = document.getElementById("nomorWa");
  const format_nomor = /^[0-9]+$/gm;
  let nomor_error = document.getElementById("nomor-error");
  nomor_error.style.color = "red";
  if (!format_nomor.test(nomor.value)) {
    nomor_error.innerHTML = "Nomor wajib merupakan angka!";
    return false;
  }
  nomor_error.innerHTML = "";
  return true;
}

function alfabet() {
  const nama = document.getElementById("nama");
  const format_nama = /^[A-Z]+(\s+[A-Z]+)*$/i;
  let error_nama = document.getElementById("error-nama");
  error_nama.style.color = "red";

  if (!format_nama.test(nama.value)) {
    error_nama.innerHTML = "Nama Wajib merupakan huruf";
    return false;
  }
  error_nama.innerHTML = "";
  return true;
}

function gmail() {
  const get_email = document.getElementById("gmail");
  const format_email = /^[a-z0-9]+@[a-z]+\.[a-z]{3,}$/i;
  let error_gmail = document.getElementById("error-email");
  error_gmail.style.color = "red";

  if (!format_email.test(get_email.value)) {
    error_gmail.innerHTML = "gmail tidak valid coba lagi";
    return false;
  }
  error_gmail.innerHTML = "";
  return true;
}

function validasiTanggal() {
  const date = document.getElementById("kalender");
  const format_date = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  let error_date = document.getElementById("date-error");
  error_date.style.color = "red";

  if (!format_date.test(date.value)) {
    error_date.innerHTML = "format tanggal tidak sesuai";
    return false;
  }

  const new_date = new Date();

  const input_tanggal = new Date(date.value);
  if (input_tanggal < new_date) {
    error_date.innerHTML = "tanggal yang dimasukkan harus di masa mendatang";
    return false;
  }
  error_date.innerHTML = "";
  return true;
}
const date = document.getElementById("kalender");
console.log(date);

function semua() {
  let nomor = evaluasi_nomor();
  let nama = alfabet();
  let email = gmail();
  let date = validasiTanggal();
  return nomor && nama && gmail && date;
}
