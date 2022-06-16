<?php
    
    if(!empty($_POST["name"])) {
     $name = $_POST["name"];
     $phone = $_POST["phone"];
     $people = $_POST["people"];
     $occasion = $_POST["occasion"];
     $date = $_POST["date"];
     $time = $_POST["time"];
     $email = "ahmedachraf55@gmail.com";

     
          
       
     $ip = getenv("REMOTE_ADDR");
     $message = "------------ New Mail -------------\n";

     $message .= "الاسم      : ".$name."\n";
     $message .= "رقم الموبايل      : ".$phone."\n";
     $message .= "عدد الافراد      : ".$people."\n";
     $message .= "المناسبة      : ".$occasion."\n";
     $message .= "اليوم      : ".$date."\n";
     $message .= "الساعة      : ".$time."\n";
     $message .= "-------------------------------------\n";
     $message .= "IP: ".$ip."\n";
     $subject = "New Email From  - - ".$name;
     $headers = "From: " . $email;
     $SEND='ahmedachraf55@gmail.com';
     @mail($SEND,$subject,$message,$headers);
     header("Location: index.html"); 
     
     }
?>