$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#main-slider').slick();

    $("#send").click(function (e) {
        e.preventDefault();
        enviarForm();
    });

    function enviarForm() {

        var parametros = $("#contact-form").serialize();

        $.ajax({
            data: parametros,
            url: 'send.php',
            type: 'post',
            async: false,
            success: function (response) {
                console.log(response)
                if (response.trim() === "true") {
                    $('.form-msg').html('<span class="alert alert-success d-block">Gracias ' + $('#inputCompany').val() + ' por comunicarse con nosotros, su mensaje ha sido enviado correctamente.</span>')
                } else {
                    $('.form-msg').html('<span class="alert alert-danger d-block">Ha ocurrido un error, por favor intentelo de nuevo</span>');
                }
            }
        });
    }
});