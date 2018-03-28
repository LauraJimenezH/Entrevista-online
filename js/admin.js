$(document).ready(function () {
  let config = {
    apiKey: "AIzaSyBCVgvNV0gko5O9rNFgQv8aXrtZOF2gzeM",
    authDomain: "fir-p-a292a.firebaseapp.com",
    databaseURL: "https://fir-p-a292a.firebaseio.com",
    projectId: "fir-p-a292a",
    storageBucket: "fir-p-a292a.appspot.com",
    messagingSenderId: "215671637058"
  };

  firebase.initializeApp(config);

  $('.registradas').click(function () {
    window.location.href = '../views/registradas.html';
  })

  var UID = window.localStorage.getItem('uid');

  // Leyendo los datos del usuario
  firebase.database().ref('users/' + UID).on('value', function (snap) {

    $('.card-registradas').append('<p class="card-text">' + snap.val()['email'] + '</p>')
    // if (snap.val()['estado'] = true) {
    //   $('.card-completas').append('<p class="card-text">' + snap.val()['email'] + '</p>')
    // }

    // if (snap.val()['estado'] = false) {
    //   $('.card-completas').append('<p class="card-text">' + snap.val()['email'] + '</p>')
    // } 
    
  });

})