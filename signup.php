<?php
    if($_SERVER["REQUEST_METHOD"]=='POST')
    {
        $name=$_POST['uname'];
        $pass=$_POST['pass'];
    }
    $servername="localhost";
    $username="root";
    $password="";
    $db="student";
    $conn=mysqli_connect($servername,$username,$password,$db);
    if(!$conn)
    {
        die("error".mysqli_connect_error());
    }
    else
    {
        $sql="SELECT * FROM `details` where name='$name' and password='$pass' ";
        $res=mysqli_query($conn,$sql);
        $num=mysqli_num_rows($res);
        if($num>1)
        {
            echo "<div class='alert1'> USER ALREADY EXIST</div>";
        }
        else
        {
        echo "connected";
        $sql="INSERT INTO `details` (`name`, `password`) VALUES ('$name', '$pass')";
        $res=mysqli_query($conn,$sql);
        echo "<script>location.href='loginpage.html'</script>";
        }
    }
?>