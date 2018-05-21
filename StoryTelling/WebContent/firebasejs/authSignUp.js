
function handleSignUp() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      if (email.length < 4) {
    	 // var thisAlert = $("#email").parent();
    	//  $(thisAlert).addClass('alert-validate');
    	  return;
      }
      if (password.length < 4) {
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    	    window.location = "index.html";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
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