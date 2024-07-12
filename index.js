document.getElementById('khodamForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam untuk nama ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
})

function generateKhodam(nama){
    const khodams = [
        'Kuda Jantan',
        'Buah Naga',
        'Singa Senyum',
        'Naga Guling',
        'Macan Tersenyum',
        'Elang Ganteng',
        'Kuda bersemangat',
        'Kelinci Gemas',
        'Kosong',
        'Tikus Imut',
        'Gajah Gembira',
        'Kucing Menggemaskan',
        'Jin Qorin',
        'Nyi Roro Kidul',
        'Kata Ceria',
        'Buaya Putih',
        'Ular Ramah',
        'lauk Beunteur',
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}