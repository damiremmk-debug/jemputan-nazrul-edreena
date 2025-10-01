// Tetapkan tarikh perkahwinan anda di sini
const weddingDate = new Date("December 20, 2025 11:30:00").getTime();

// Kemas kini kiraan hari setiap 1 saat
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Kira masa untuk hari, jam, minit, dan saat
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Paparkan hasilnya dalam elemen dengan id="countdown"
    document.getElementById("countdown").innerHTML =
        `<div><span class="value">${days}</span><span class="label">Hari</span></div>` +
        `<div><span class="value">${hours}</span><span class="label">Jam</span></div>` +
        `<div><span class="value">${minutes}</span><span class="label">Minit</span></div>` +
        `<div><span class="value">${seconds}</span><span class="label">Saat</span></div>`;

    // Jika kiraan tamat, paparkan mesej
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Majlis telah berlangsung!";
    }
}, 1000);

// Fungsi untuk mengendalikan butang 'Open'
document.getElementById("openButton").addEventListener("click", function() {
    document.getElementById("openingCard").style.display = "none";
    document.getElementById("mainContent").style.display = "flex";
});