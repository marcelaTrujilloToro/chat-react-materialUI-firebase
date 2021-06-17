import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderChat from './components/layout/Header';
import User from './components/User';
import Routes from './Routes';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; 

//configuracion de farebase
const firebaseConfig = {
  apiKey: "AIzaSyDd-k6lwU-KmpoU45WOEIN9hobxUIXpxCs",
  authDomain: "chatapp-43747.firebaseapp.com",
  projectId: "chatapp-43747",
  storageBucket: "chatapp-43747.appspot.com",
  messagingSenderId: "129441072086",
  appId: "1:129441072086:web:4c9437b846fb8185da5a77"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {

  const [user, setUser] = useState(null);

  const onLogout = () => {
    setUser(null);
  }

  // evento cuando se cargue la aplicacion decuando cambie el status de la autencitacion 
  useEffect(() => {

    firebase.auth().onAuthStateChanged(response => {

      // si hay un response hay un usuario autenticado
      if(response){
        // leer datos del usuario
        firebase.database().ref(`/users/${response.uid}`)
        //dispara la lectura una sola vez
        .once('value')
        // snapshot: instantanea de los datos
        .then(snapshot => {
          setUser(snapshot.val());
        })
      }
    });
  }, []);


  return (
    <Router>
      <CssBaseline/>
      <HeaderChat>
        {user && <User user={user} onLogout={onLogout} />}
      </HeaderChat>
      <Routes/>
    </Router>
  );
}

export default App;
