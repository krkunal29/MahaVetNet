<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
    include "../connection.php";
	  mysqli_set_charset($conn,'utf8');
	  $response=null;

	 if(isset($_POST['usrname']) &&  isset($_POST['passwrd']))
	 {
		extract($_POST);
		       $query = mysqli_query($conn,"select * from user_master_admin where email='$usrname' or mobile1='$usrname' and password='$passwrd'");
			   if($query!=null)
			{
			$affected=mysqli_num_rows($query);
				if($affected>0)
				{
					$email=null;
					while($result = mysqli_fetch_assoc($query))
					{
					$records=$result;
					}


				$response=array("Data"=>$records,"Responsecode"=>200,"Message"=> "Login Successful");
				}
				else
				{
					$response=array("Message"=> "Invalid username or password!","Responsecode"=>401);
				}
			}
			else
			{
			$response=array("Message"=> "Invalid username or password!","Responsecode"=>403);
			}
	 }
	 else
	 {
		$response=array("Message"=> "Check query parameters","Responsecode"=>403);
	 }
   mysqli_close($conn);
	 print json_encode($response);
?>
