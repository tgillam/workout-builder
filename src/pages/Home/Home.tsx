import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeContainer from '../../components/HomeContainer'
import Header from "../../components/Header"



const Home: React.FC = () => {

  return (
    <IonPage>
      <Header name="Login"/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer name="Login" />
    
      </IonContent>
    </IonPage>
  );
}

export default Home;
