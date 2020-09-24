function tambah() {
    var bil1 = parseFloat(document.getElementById("bil1").value);
    var bil2 = parseFloat(document.getElementById("bil2").value);
    document.getElementById("hasil").value = bil1 + bil2;
}

function kurang() {
    var bil1 = parseFloat(document.getElementById("bil1").value);
    var bil2 = parseFloat(document.getElementById("bil2").value);
    document.getElementById("hasil").value = bil1 - bil2;
}

function kali() {
    var bil1 = parseFloat(document.getElementById("bil1").value);
    var bil2 = parseFloat(document.getElementById("bil2").value);
    document.getElementById("hasil").value = bil1 * bil2;
}

function bagi() {
    var bil1 = parseFloat(document.getElementById("bil1").value);
    var bil2 = parseFloat(document.getElementById("bil2").value);
    document.getElementById("hasil").value = bil1 / bil2;
}