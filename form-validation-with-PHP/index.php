<?php
  $name = $email = "";
  $name_error = $email_error = $success = "";

  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);

    if (empty($_POST["name"])) {
      $name_error = "Name is required";
    } else if (!preg_match("/^[a-zA-Z ]*$/",$name)){
      $name_error = "Only letters and white space allowed";
    }  
  
    if (empty($_POST["email"])) {
      $email_error = "Email is required";
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = "Invalid email format";
    }

    if ($email_error  === '' && $name_error === '') {
      $to = $email;
      $subject = 'Contact Us - '.$name;

      $message_body = '';
      unset($_POST['submit']);
      
      if (mail($to, $subject, $message_body)){
        $success = "Message sent. thank you for contacting us!";
        $name = $email = '';
      }
    }

  }

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Basic Form Validation with PHP</title>
    <link href="tailwind.css" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container mx-auto p-4">
      <h1 class="mb-8 lg:mb-16 text-4xl lg:text-5xl font-bold text-center">Basic Form Validation with PHP</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:w-2/3 lg:h-96 mx-auto lg:rounded-md overflow-hidden shadow-2xl">
        <div class="p-4 lg:p-8">
          <h2 class="text-3xl mb-2">Contact Us</h2>
          <p class="mt-1 mb-4 text-sm text-gray-600">For any enquiries don't hesitate to contact us.</p>

          <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="my-2 mb-8">
              <input
                type="text"
                name="name"
                id="name"
                value="<?= $name ?>"
                class="block w-full border focus:ring-indigo-500 focus:border-indigo-500 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                required
              />
              <span class="error mt-1 text-sm"><?= $name_error ?></span>
            </div>

            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="my-2 mb-8">
              <input
                type="text"
                name="email"
                id="email"
                value="<?= $email ?>"
                class="block w-full border focus:ring-indigo-500 focus:border-indigo-500 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                required
              />
              <span class="error mt-1 text-sm"><?= $email_error ?></span>
            </div>

            <div class="my-8 mb-0">
              <input type="submit" name="submit" value="Submit" class="w-full sm:w-auto rounded-md py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer" />
            </div>
          </form>
        </div>

        <div class="hidden lg:block">
          <img src="contact-us.jpg" alt="Contact Us" width="300" class="max-h-screen w-full"/>
        </div>

        <?php 
          if (!empty($success)) {
            echo "<div class='success-popup show'>".$success."</div>";
          }
        ?> 

      </div>
    </div>
  </body>
</html>
