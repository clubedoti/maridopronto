var firebaseConfig = {
    apiKey: "AIzaSyB53gMd0Roswr09ajpU59B9JyqyO6SxUB4",
    authDomain: "app-marido-pronto.firebaseapp.com",
    databaseURL: "https://app-marido-pronto-default-rtdb.firebaseio.com/",
    projectId: "app-marido-pronto",
    storageBucket: "app-marido-pronto.appspot.com",
    messagingSenderId: "375818691545",
    appId: "1:375818691545:web:108263242badb26f13afc8",
    measurementId: "G-VVNMMTE1Z4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  ///var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

   var name = getInputVal('cname');
    var email = getInputVal('cemail');
    var zap = getInputVal('czap');
    var bairro = getInputVal('cbairro');
    var tipo = getInputVal('ctipo');
    var desc = getInputVal('cdesc');  
    
  
    saveMessage(name, email, zap, bairro, tipo, desc)
    document.querySelector('.alert').style.display = "block";

    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
    }, 5000) 

   // console.log('ola');
    
}   

function getInputVal(id){
    return document.getElementById(id).value;
}
/* function saveMessage(name, email, zap, bairro, tipo, desc){
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name: name,
        email: email,
        zap: zap,
        bairro: bairro,
        tipo: tipo,
        desc: desc
    })
}  */
function saveMessage(name, email, zap, bairro, tipo, desc) {
    console.log('ola');
    // Add a new message entry to the database.
    return firebase.firestore().collection('messages').add({
        
        name: name,
        email: email,
        zap: zap,
        bairro: bairro,
        tipo: tipo,
        desc: desc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function(error) {
      console.error('Error writing new message to database', error);
    });
  }

