<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["name"];
            $email = $_POST["email"];
            $message = $_POST["message"];

            $to = "lukaspolicarpo1@gmail.com"; // Seu endereço de email
            $headers = "From: $email";
            $mailBody = "Mensagem de $name ($email):\n\n$message";

            if (mail($to, $mailBody, $headers)) {
                echo "Mensagem enviada com sucesso!";
                } else {
                     echo "Erro ao enviar a mensagem.";
                }
        }
?>