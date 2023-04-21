function konfirmnadhim() {

    var inama = document.fabsen.txtnama.value;
    var iemail = document.fabsen.txtemail.value;
    var ipesan = document.fabsen.txtpesan.value;
    var kosong = "tidak boleh kosong";

    if (inama == "") {
        alert("Namanya" + kosong);
    } else if (iemail == "") {
        alert("Emailnya" + kosong);
    } else if (ipesan == "") {
        alert("Komentarnya" + kosong);
    } else {
        document.fabsen.submit();
    }

}