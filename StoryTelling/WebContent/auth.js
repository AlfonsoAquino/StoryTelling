	/** firebase */
	var config = {
    apiKey: "AIzaSyBV89MiF1O_8URy3BdhTs9ODqDE7mtZ3y8",
    authDomain: "storytelling-2b87c.firebaseapp.com",
    databaseURL: "https://storytelling-2b87c.firebaseio.com",
    projectId: "storytelling-2b87c",
    storageBucket: "storytelling-2b87c.appspot.com",
    messagingSenderId: "310263310004"
  };
  firebase.initializeApp(config);
  
	function tellAppInventor(message) {
        try {
            window.AppInventor.setWebViewString( message );
        } catch(e) {
            console.log("App Inventor Communication Error",e)
        }
    }
    
    /**
     * Handles the sign in button press.
     */
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
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            tellAppInventor('Wrong password.');
          } else {
            tellAppInventor(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
        window.location.assign("https://www.w3schools.com");
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }
    /**
     * Handles the sign up button press.
     */
    function handleSignUp() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      if (email.length < 4) {
        tellAppInventor('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        tellAppInventor('Please enter a password of 4 or more characters.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          tellAppInventor('The password is too weak.');
        } else {
          tellAppInventor(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
      window.location.assign("https://www.w3schools.com");
    }
    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        tellAppInventor('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
    function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        tellAppInventor('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          tellAppInventor(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          tellAppInventor(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }
    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
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
                tellAppInventor( uid + ',' + email + ',' + displayName + ',' + photoURL );
            } else if (!emailVerified) {
                tellAppInventor( 'Please click the Send Email Verification button to confirm your account.' );
            }
          
          // [START_EXCLUDE]
//          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
//          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
          if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
          }
          // [END_EXCLUDE]
        } else {
          // User is signed out.
          // [START_EXCLUDE]
//          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
//          document.getElementById('quickstart-sign-in').textContent = 'Sign in';
//          document.getElementById('quickstart-account-details').textContent = 'null';
          // [END_EXCLUDE]
        }
        // [START_EXCLUDE silent]
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });
      // [END authstatelistener]
   //  document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
     document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
   //  document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
   //  document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
    }
    window.onload = function() {
      initApp();
    };