var btn = document.getElementById("SubmitButton").disabled;

function disableBtn() {
    document.getElementById("SubmitButton").disabled = true;
}

function enableBtn() {
    document.getElementById("SubmitButton").disabled = false;
}

alert('Please write proper email adress');

<script>
    function checkValidity() {   
          
        var name_f = document.getElementsById("name").length;
        var email_f = document.getElementById("email").length;
        var message_f = document.getElementById("msg").length;
        if (name_f == 0 || email_f==0 || message_f==0) {
            document.getElementById('SubmitButton').disabled=true;
        }
        if ( name_f!=0 && email_f!=0 && message_f!=0) {
            document.getElementById('SubmitButton').disabled = false;
        }
</script>

                            function CheckValidity(txt) {
                                var btn = document.getElementById('SubmitButton');
                                if (txt.value != '') {
                                    btn.disabled = false;
                                }
                                else {
                                    btn.disabled = true;
                                }
                            }