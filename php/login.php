
<html>
    <head></head>
    <body>

        <form id="form" action="login.php" method="post" >
            <h1>Log ind for at spille spacespillet</h1>

            <?php
                $conn = new mysqli ("marlene-helga-olsen.nu.mysql:3306" , "spacespil" , "spacespil" , "spacespil");
                //$conn = new mysqli ("localhost" , "root" , "root" , "spacespil");
              /*  if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                  } 
                  echo "Connected successfully"; 
         */
            ?>

            <?php
                function findes ($username, $password , $c)
                {
                    $sql = $c->prepare("select password from login where username=?");
                    $sql->bind_param("s", $username);
                    $sql->execute();
                    $result = $sql->get_result();
                    if($result->num_rows > 0)
                    {
                        $row=$result->fetch_assoc();
                        $passwordFraTabel=$row["password"];
                        if($passwordFraTabel == $password)
                        {
                            return true;
                        }
                        //forkert password
                        else
                        {
                            return false;
                        }
                    }
                    //forkert username
                    else
                    {
                        return false;
                    }
                }

            ?>
            <?php
                $buttonlogin = "";
         
            if($_SERVER['REQUEST_METHOD'] === 'POST')
                {
                    if($_REQUEST['knap'] == "Login")
                    {
                        $username = $_REQUEST['username'];
                        $password= $_REQUEST['password'];
                        $findes = findes($username, $password, $conn);
                        if($findes)
                        {
                            echo "ok";
                            echo '<script>window.location="game.php"</script>';
                        }
                        else
                        {
                            echo "fejl i login";
                        }
                    }

                }
            ?>

            <?php
                $conn -> close ();
            ?>
            <div class="login">
            <p>
                Username: <input type="text" name="username" value="<?php echo isset($username) ? $username : '' ?>" style="width: 200px; height: 35px"></br></br>
                Password: <input type="text" name="password" value="<?php echo isset($password) ? $password : '' ?>" style="  width: 200px; height: 35px"></br></br>
            </p>
    
            <p>
                <input type="submit" name="knap" value="Login" style="width: 100px height:35px"  <?php echo $buttonlogin ?> >
                <a class="ligneKnap" href="registrer.php" > Registrer </a>

           
            </p>
            </div>
       
        </form>
    </body>

    <style>
        body{
            background-color: #33565a;
        }
        form{
            width: 500px;
            height: 500px;
            margin-left: 30%;
            margin-top: 100px;  
            border: 6px solid black;  
            padding-top: 100px;
            background-color:#2E2251;

        }
        h1{
            font-family: 'Courier New', Courier, monospace;
            font-size: 35px;
            text-align: center;
            color: #f6f1f5;
        }
        p{
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
            color: #f6f1f5;

        }
        .login{
            text-align: center;
        }
        input{
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
            border: 3px solid black;
            color: black;
            background-color: #f6f1f5;

        }
        .ligneKnap{
            border: 3px solid black;
            font-family: 'Courier New', Courier, monospace;
            font-size: 25px;
            color: black;
            background-color: white;
            text-decoration: none;
            padding:1.8px;  
        }
    </style>
</html>