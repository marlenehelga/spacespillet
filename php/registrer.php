<?php
    session_start();
?>

<html>
    <head></head>
    <body>
        <form action="registrer.php" method="post">
        <h1>Registrer dig her for at kunne logge ind</h1>
            <?php
                $conn = new mysqli("marlene-helga-olsen.nu.mysql:3306", "spacespil", "spacespil" , "spacespil");
               // $conn = new mysqli ("localhost" , "root" , "root" , "spacespil");
/*                 if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                  } 
                  echo "Connected successfully";  */
            ?>

            <?php 
                function findes($username, $c)
                {
                    $sql = $c->prepare("select * from login where username = ?");
                    $sql->bind_param("s", $username);
                    $sql->execute();
                    $result = $sql->get_result();
                    if($result->num_rows > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            ?>

            <?php
                $buttoncreate = "";
                
            
                if($_SERVER['REQUEST_METHOD'] === 'POST')
                {
                    //create
                    if($_REQUEST['knap'] == "Create")
                    {
                        $username = $_REQUEST['username'];
                        if(!preg_match("/^[a-zA-z]*$/", $username))
                        {
                            $err = "Benyt kun store og små bogstaver";
                            echo $err;
                        }
                       
                        $email = $_REQUEST['email'];
                            $pattern = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";  
                        if(!preg_match ($pattern, $email))
                        {
                            $err = " Email er ikke valideret ";
                            echo $err;
                        }
                        
                        $password = $_REQUEST['password'];
                        if(!findes($username,$conn))
                        {
                            $sql = $conn->prepare("insert into login(username, email, password) values (?,?,?) ");
                            $sql->bind_param("sss", $username, $email, $password);
                            $sql->execute();
                            echo "Vellykket, du vil nu sendes til login";
                            header("refresh:1.5; URL = login.php");
                        }
                        else
                        {
                            echo "Brugernavn findes allerede";
                        }
                //besked om at man skal logge på og viderstilles til login side
                    }
                    else
                    {
                        echo "noget gik galt";
                    }
                }

            ?>
            <?php
                $conn -> close ();
            ?>
            <div class="regi">
            <p>
                Username: <input type="text" name="username" required value="<?php echo isset($username) ? $username : '' ?>" style="width: 200px; height: 35px" ></br></br>
                Email: <input type="text" name="email" required value="<?php echo isset($email) ? $email : '' ?>"  style="width: 200px; height: 35px" ></br></br>
                Password: <input type="text" name="password" required value="<?php echo isset($password) ? $password : '' ?>"  style="width: 200px; height: 35px" ></br></br>
            </p>

            <p>
                <input type="submit" name="knap" value="Create" style="width: 120px" <?php echo $buttoncreate ?> >
                <a class="ligneKnap" href="login.php"> log in </a>
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
        .regi{
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
            padding: 1.8px; 
        }
    </style>
</html>