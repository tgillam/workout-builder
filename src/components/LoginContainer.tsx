import React, { useState } from 'react';
import './LoginContainer.css';
// import Cookies from 'js-cookie';
import { IonSpinner, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel } from '@ionic/react';
import { getAccessToken } from '../authentication/authentication'
import { query } from '../api/api'
import { Md5 } from "md5-typescript";
import { useHistory } from 'react-router-dom'


interface ContainerProps {
  name: string;
}

const LoginContainer: React.FC<ContainerProps> = () => {
    const history = useHistory();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
  
    const attemptLogin = async () => {
        if(!password) {
            return
        }
        const hashedPassword = Md5.init(password)
        const result = await query(`query { getUsers(id: "${username}", password: "${hashedPassword}"){ id password }}`)
        if(result.getUsers.length === 0) {
            console.log('bad login')
            return false
        }
        console.log('good login')
        document.cookie = 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRnaWxsYW05NkBnbWFpbC5jb20iLCJuYW1lIjoiVHlsZXIiLCJleHBpcmF0aW9uIjoxNjExODg2NTgwMDAwfQ.a-W-9NrdCh2peq7OlDMMW9C_a7QS3vaDsJUv0KnhIck'
        history.push(`/page/home`);
        return true     
    }

    function displayPage() {
        console.log(getAccessToken())
        if(!getAccessToken()){
            return (<IonCard>
            <IonCardHeader>
              <IonCardTitle>Login</IonCardTitle>
            </IonCardHeader>
      
          <IonCardContent>
            <IonItem>
              <IonLabel position="stacked">Username: </IonLabel>
               <IonInput value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password: </IonLabel>
               <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value!)} ></IonInput>
            </IonItem>
            <div className="button">
               <IonButton color="primary" shape="round" onClick={ attemptLogin } >Login</IonButton>
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
