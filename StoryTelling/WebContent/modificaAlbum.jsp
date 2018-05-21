<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<!--FireBase-->
<script src="https://www.gstatic.com/firebasejs/5.0.3/firebase.js"></script>
<script>
	// Initialize Firebase
	var config = {
		apiKey : "AIzaSyBV89MiF1O_8URy3BdhTs9ODqDE7mtZ3y8",
		authDomain : "storytelling-2b87c.firebaseapp.com",
		databaseURL : "https://storytelling-2b87c.firebaseio.com",
		projectId : "storytelling-2b87c",
		storageBucket : "storytelling-2b87c.appspot.com",
		messagingSenderId : "310263310004"
	};
	firebase.initializeApp(config);
</script>
<!-- Bootstrap  -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
	integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
	integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
	crossorigin="anonymous"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
	integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
	crossorigin="anonymous"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
<!--===============================================================================================-->
<link rel="icon" type="image/png" href="images/icons/favicon.ico" />
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css"
	href="vendor/select2/select2.min.css">
<!--===============================================================================================-->
<link rel="stylesheet" type="text/css" href="css/util.css">
<link rel="stylesheet" type="text/css" href="css/main.css">


<title>Home</title>
</head>
<body>
		<div class="container-contact100"
			style="background-image: url('images/bg-01.jpg');">
			<div class="row">
				<div class="col"></div>
				<div class="col-10">
					<div class="wrap-contact100">
						<form class="contact100-form validate-form">
					
						<div class="form-group">
        Select file to upload: <input type="file" name="file"  class="form-control"/><br />
        <br /> 
        </div>
		
						</form>
					</div>

				</div>
				<div class="col"></div>
			</div>
			
		</div>

		<div id="dropDownSelect1"></div>

	<script src="js/main.js"></script>
</body>
</html>