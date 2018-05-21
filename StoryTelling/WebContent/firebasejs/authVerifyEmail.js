function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function(user) {
      // [START_EXCLUDE silent]
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
          window.location("../VerificaEmail.html");
          }
        
        // [START_EXCLUDE]
//        document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
//        document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//        document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        if (!emailVerified) {
        	window.location("../VerificaEmail.html");
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
  }
 window.onload = function() {
    initApp();
  };