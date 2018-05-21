function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          tellAppInventor('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          tellAppInventor('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        	  var user= firebase.auth().currentUser;
        	alert(user.email);
    	    window.location = "modificaAlbum.jsp";
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            //tellAppInventor('Wrong password.');
          } else {
           // tellAppInventor(errorMessage);
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