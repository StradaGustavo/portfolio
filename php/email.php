<?php


$to = "gss.stradagustavo@gmail.com";
$subject = "Nova mensagem do formulário de contato";


$fullname = htmlspecialchars($_POST['fullname']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$subject_input = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);


if (empty($fullname) || empty($email) || empty($message)) {
    echo "Todos os campos obrigatórios devem ser preenchidos.";
    exit;
}

$body = "Nome: $fullname\n";
$body .= "E-mail: $email\n";
$body .= "Telefone: $phone\n";
$body .= "Assunto: $subject_input\n";
$body .= "Mensagem:\n$message\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";


if (mail($to, $subject, $body, $headers)) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Ocorreu um erro ao enviar a mensagem. Tente novamente.";
}

?>