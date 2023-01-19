                    <script>

                        function sub()
{
    if((document.forminput.id.value!='')&&(document.forminput.server.value!=''))
    {
        alert("Your tickets have been booked.");
    }
}

        function validateForm() {
            if (document.forms["forminput"]["id"].value == "") {
                alert("Nama Tidak Boleh Kosong");
                document.forms["forminput"]["id"].focus();
                return false;
            }
            if (document.forms["forminput"]["zoneid"].value == "") {
                alert("Email Tidak Boleh Kosong");
                document.forms["forminput"]["zoneid"].focus();
                return false;
            }
        }

    </script>

function check()
{
    for( i = 0; i <= document.bayar.RB.length; i++ ){

        if(document.bayar.RB[0].checked==true) {
              document.bayar.price.value=2500;
        }else if(document.bayar.RB[1].checked==true) {
              document.bayar.price.value=2000;
}
</script>