// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    // Ambil elemen-elemen yang kita butuhkan
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');

    // --- Logika untuk Tombol "Yes" ---
    yesBtn.addEventListener('click', () => {
        // Tampilkan pop-up
        modal.style.display = 'block';
    });

    // --- Logika untuk Tombol Tutup (X) di Pop-up ---
    closeBtn.addEventListener('click', () => {
        // Sembunyikan pop-up
        modal.style.display = 'none';
    });

    // --- Logika untuk Tombol "No" ---
    
    // Fungsi untuk memindahkan tombol
    function moveButton() {
        // Dapatkan ukuran area tombol
        const buttonContainer = document.querySelector('.buttons');
        const containerRect = buttonContainer.getBoundingClientRect();
        
        // Dapatkan ukuran tombol
        const btnRect = noBtn.getBoundingClientRect();

        // Hitung posisi acak baru di dalam container
        // dikurangi ukuran tombol agar tidak keluar batas
        let newTop = Math.random() * (containerRect.height - btnRect.height);
        let newLeft = Math.random() * (containerRect.width - btnRect.width);

        // Terapkan posisi baru
        noBtn.style.top = newTop + 'px';
        noBtn.style.left = newLeft + 'px';
    }

    // Pindahkan tombol saat mouse mendekat (hover)
    noBtn.addEventListener('mouseover', moveButton);

    // Pindahkan juga saat diklik (untuk jaga-jaga di mobile)
    noBtn.addEventListener('click', moveButton);

});