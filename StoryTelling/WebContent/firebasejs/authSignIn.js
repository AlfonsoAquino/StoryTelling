function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
       
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        	  var user= firebase.auth().currentUser;
        	alert(user.email);
    	    window.location = "modificaAlbum.jsp";
      }).catch(function(error) {
//          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          switch (error.code) {
          case "auth/wrong-password":
        	  var thisAlert = $("#password").parent();
            	$(thisAlert).addClass('alert-validate').attr('data-validate',errorMessage);
            	$('#password').focus(function(){
            		$(thisAlert).removeClass('alert-validate');
            	});
            break;
          case "auth/user-not-found":
        	  var thisAlert = $("#email").parent();
          	$(thisAlert).addClass('alert-validate').attr('data-validate',errorMessage);
          	$('#email').focus(function(){
          		$(thisAlert).removeClass('alert-validate');
          	});
            break;
          case "auth/invalid-email":
        	  var thisAlert = $("#email").parent();
            	$(thisAlert).addClass('alert-validate').attr('data-validate',errorMessage);
            	$('#email').focus(function(){
            		$(thisAlert).removeClass('alert-validate');
            	});
            break;
          default:
            alert("Error logging user in:", errorMessage);
        }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
   //   document.getElementById('quickstart-sign-in').disabled = true;
    }
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]

    // [END authstatelistener]
   document.getElementById("quickstart-sign-in").addEventListener("click", toggleSignIn, false);
  }
 window.onload = function() {
    initApp();
  };