import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginContainer from '../../components/LoginContainer'
import Header from "../../components/Header"



const Login: React.FC = () => {

  return (
    <IonPage>
      <Header name="Login"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginContainer name="Login" />
    
      </IonContent>
    </IonPage>
  );
}

export default Login;
