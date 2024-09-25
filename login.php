<?php
    if($_SERVER["REQUEST_METHOD"]=='POST')
    {
        $name=$_POST['uname'];
        $pass=$_POST['pass'];
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
            if($num==1)
            {
                echo "<script>localStorage.setItem('user','$name')</script>";
                echo "<script>location.href='./home.html'</script>";
            }
            else
            {
                echo "<script>alert('INVALID CREDENTIALS')</script>";
            }
        }
    }
?>