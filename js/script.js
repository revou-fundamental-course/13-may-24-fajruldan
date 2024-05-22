document.addEventListener('DOMContentLoaded', function () {
    const luas = document.getElementById("luas");

    luas.addEventListener("submit", function(event){
        event.preventDefault();
        const nilaiAlas = Number(event.target.alas.value) || 0;
        const nilaiTinggi = Number(event.target.tinggi.value) || 0;

        if (isNaN(nilaiAlas) || isNaN(nilaiTinggi)) {
            alert("Masukkan nilai yang valid untuk alas dan tinggi.");
            return;
        }

        const li2 = luas.querySelector('ul li:nth-child(2)');
        li2.textContent = `L = 1/2 x ${nilaiAlas} x ${nilaiTinggi}`;

        const li3 = luas.querySelector('ul li:nth-child(3)');
        li3.textContent = `L = ${0.5 * nilaiAlas * nilaiTinggi}`;

        const hasilSegitiga = document.querySelector("#hasil-segitiga");
        hasilSegitiga.style.display = "block";
    });

    const keliling = document.getElementById("keliling");

    keliling.addEventListener("submit", function(event){
        event.preventDefault();

        const sisiA = Number(event.target.s1.value) || 0;
        const sisiB = Number(event.target.s2.value) || 0;
        const sisiC = Number(event.target.s3.value) || 0;

        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
            alert("Masukkan nilai yang valid untuk semua sisi.");
            return;
        }

        const li2 = keliling.querySelector('ul li:nth-child(2)');
        li2.textContent = `K = ${sisiA} + ${sisiB} + ${sisiC}`;

        const li3 = keliling.querySelector('ul li:nth-child(3)');
        li3.textContent = `K = ${sisiA + sisiB + sisiC}`;

        const hasilKeliling = document.querySelector("#hasil-keliling");
        hasilKeliling.style.display = "block";
    });

    const resetSegitiga = document.querySelector("#reset-segitiga");
    resetSegitiga.addEventListener("click", function(){
        const hasilSegitiga = document.querySelector("#hasil-segitiga");
        hasilSegitiga.style.display = "none";
    });

    const resetKeliling = document.querySelector("#reset-keliling");
    resetKeliling.addEventListener("click", function(){
        const hasilKeliling = document.querySelector("#hasil-keliling");
        hasilKeliling.style.display = "none";
    });
});
