import React, { useState } from 'react';
import './LoginContainer.css';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel } from '@ionic/react';
import { isAuthenticated } from '../authentication/authentication'


interface ContainerProps {
  name: string;
}

const LoginContainer: React.FC<ContainerProps> = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const testFunction = () => {
        console.log(`${username} : ${password}`)
    }

    function displayPage() {
        if(!isAuthenticated()){
            return (<IonCard>
            <IonCardHeader>
              <IonCardTitle>Login</IonCardTitle>
            </IonCardHeader>
      
          <IonCardContent>
            <IonItem>
              <IonLabel>Username: </IonLabel>
               <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Password: </IonLabel>
               <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value!)} ></IonInput>
            </IonItem>
            <div className="button">
               <IonButton color="primary" shape="round" onClick={ testFunction } >Login</IonButton>
            </div>
          </IonCardContent>
          </IonCard>)
        }
    }

    
  return (
    <div className="container">
    { displayPage() }
    </div>
  );
};

export default LoginContainer;
