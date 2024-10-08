<?php
// Define the path to your Excel file
$excelFilePath = './Contact_Data/data.xlsx';

// Extract form data
$name = $_POST['text1_smallName'];
$email = $_POST['text1_smallEmail'];
$phone = $_POST['text1_smallPhone'];
$contactChannel = $_POST['text1_smallcontact'];
$comments = $_POST['txtInfo'];

// Prepare data to write to Excel
$data = array($name, $email, $phone, $contactChannel, $comments);

// Append data to the Excel file
$file = fopen($excelFilePath, 'a');
fputcsv($file, $data);
fclose($file);

// Redirect back to the contact page or any other page
header('Location: contact.html');
exit();
?>
