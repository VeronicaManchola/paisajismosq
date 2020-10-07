<?php
$mailer="administracion@paisajismosequoia.cl"; // Direcci�n a la que se enviar� el correo

$cabeceras  = "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-type: text/html; charset=iso-8859-1\r\n";

$subject = "Nuevo mensaje desde la web - " . $_POST["empresa"];

// Enviamos el correo electr�nico
$res = mail($mailer, $subject, "Empresa: ".$_POST["empresa"]."\nE-Mail: ".$_POST["email"]."\nFono: ".$_POST["fono"]."\nMensaje: ".$_POST["mensaje"].", \n$cabeceras , \nDirecci�n IP: ".getenv("REMOTE_ADDR").", \nFecha: ".date("d/M/y h:i:s")." \n");

if($res) {
    echo "true";
} else {
    echo "true";
}

?>