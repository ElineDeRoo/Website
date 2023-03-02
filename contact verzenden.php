<?php
if (isset($_POST['email'])) {
    // Verzend de e-mail
    $to = "eline.deroo@ugent.be";
    $subject = $_POST['onderwerp'];
    $naam = $_POST['naam'];
    $email = $_POST['email'];
    $onderwerp = $_POST['onderwerp'];
    $bericht = $_POST['bericht'];

    // Bouw de e-mail
    $body = "Naam: $naam\n\nE-mail: $email\n\nBericht:\n$bericht";
    // Onderwerp: $onderwerp\n

    // Verzend de e-mail
    mail($to, $subject, $body);

    // // Stuur de gebruiker door naar een bedankpagina
    // header('Location: bedankt.html');
}
?>