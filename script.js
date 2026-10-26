const form = document.getElementById("formWorkshop");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const jumlahKarakter =
document.getElementById("jumlahKarakter");

const infoSesi =
document.getElementById("infoSesi");

const pesan =
document.getElementById("pesan");

const hasilRingkasan =
document.getElementById("hasilRingkasan");

const btnReset =
document.getElementById("btnReset");



nama.addEventListener("input", function(){

    jumlahKarakter.textContent =
    nama.value.length;

});



sesi.addEventListener("change", function(){

    if(sesi.value === ""){
        infoSesi.textContent =
        "Belum memilih sesi.";
    }
    else{
        infoSesi.textContent =
        "Sesi dipilih: " + sesi.value;
    }

});



form.addEventListener("submit", function(event){

    event.preventDefault();

    const namaValue =
    nama.value.trim();

    const emailValue =
    email.value.trim();

    const sesiValue =
    sesi.value;

    const polaEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(namaValue === ""){

        pesan.textContent =
        "Nama wajib diisi.";

        pesan.className = "error";

        return;
    }


    if(namaValue.length < 3){

        pesan.textContent =
        "Nama minimal 3 karakter.";

        pesan.className = "error";

        return;
    }


    if(!polaEmail.test(emailValue)){

        pesan.textContent =
        "Masukkan email yang valid.";

        pesan.className = "error";

        return;
    }


    if(sesiValue === ""){

        pesan.textContent =
        "Silakan pilih sesi workshop.";

        pesan.className = "error";

        return;
    }


    pesan.textContent =
    "Pendaftaran berhasil!";

    pesan.className = "sukses";


    hasilRingkasan.innerHTML = `
    <div class="ringkasan">
        <h3>Data Pendaftaran</h3>
        <p><strong>Nama:</strong> ${namaValue}</p>
        <p><strong>Email:</strong> ${emailValue}</p>
        <p><strong>Sesi:</strong> ${sesiValue}</p>
    </div>
    `;

});



btnReset.addEventListener("click", function(){

    form.reset();

    jumlahKarakter.textContent = "0";

    infoSesi.textContent =
    "Belum memilih sesi.";

    hasilRingkasan.innerHTML = "";

    pesan.textContent = "";

    pesan.className = "";

});