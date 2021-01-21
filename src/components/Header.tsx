import React, { useState } from 'react';
import './Header.css';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton } from '@ionic/react';
import { getAccessToken, logout } from '../authentication/authentication'
import { useHistory } from 'react-router-dom'


interface ContainerProps {
    name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
    const history = useHistory();
    const authenticate = () => {
        if(getAccessToken()){
            console.log('logging out')
            logout()
            history.push(`/page/home`);
            return
        } //logout
        history.push(`/login`);
    }
  return (
    <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>{name}</IonTitle>
      <div className="header">
        <IonButton size="small" color="primary" shape="round" onClick={ authenticate }>{ getAccessToken() ? "Logout" : "Login"}</IonButton>
      </div>
    </IonToolbar>
  </IonHeader>
  );
};

export default Header;
