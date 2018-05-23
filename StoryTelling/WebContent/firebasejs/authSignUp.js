
function handleSignUp() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    	  var user= firebase.auth().currentUser;
    	  user.sendEmailVerification().then(function() {
    	 window.location = "index.html";
    	  }).catch(function(error) {
    	    // An error happened.
    		  alert("An error happened:", errorMessage)
    	  });
      }).catch(function(error) {
        // Handle Errors here.
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
        case "auth/email-already-in-use":
        	 var thisAlert = $("#email").parent();
           	$(thisAlert).addClass('alert-validate').attr('data-validate',errorMessage);
           	$('#email').focus(function(){
           		$(thisAlert).removeClass('alert-validate');
           	});
        	break;
        case "auth/weak-password":
        	var thisAlert = $("#password").parent();
        	$(thisAlert).addClass('alert-validate').attr('data-validate',errorMessage);
        	$('#password').focus(function(){
          		$(thisAlert).removeClass('alert-validate');
          	});
        	break;
        default:
          alert("Error logging user in:", errorMessage);
      } 
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }



function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
      document.getElementById('quickstart-verify-email').disabled = true;
      // [END_EXCLUDE]
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        if (emailVerified && !isAnonymous) {
          //    tellAppInventor( uid + ',' + email + ',' + displayName + ',' + photoURL );
          } else if (!emailVerified) {
         //     tellAppInventor( 'Please click the Send Email Verification button to confirm your account.' );
          }
        
        // [START_EXCLUDE]
//        document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
//        document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//        document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        if (!emailVerified) {
        //  document.getElementById('quickstart-verify-email').disabled = false;
        }
        // [END_EXCLUDE]
      } else {
        // User is signed out.
        // [START_EXCLUDE]
//        document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
//        document.getElementById('quickstart-sign-in').textContent = 'Sign in';
//        document.getElementById('quickstart-account-details').textContent = 'null';
        // [END_EXCLUDE]
      }
      // [START_EXCLUDE silent]
  //    document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
    // [END authstatelistener]
   document.getElementById("quickstart-sign-up").addEventListener("click", handleSignUp, false);
  }
 window.onload = function() {
    initApp();
  };
  