import React, { useState } from 'react';
import './LoginContainer.css';
// import Cookies from 'js-cookie';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel } from '@ionic/react';
import { getAccessToken } from '../authentication/authentication'
import { query } from '../api/api'
import { Md5 } from "md5-typescript";


interface ContainerProps {
  name: string;
}

const LoginContainer: React.FC<ContainerProps> = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const attemptLogin = async () => {
        //hit getUsers(username: password:) query.
        //if successful, hit getToken mutation 
        //if gettoken returns value, add it to cookies
        //redirect to home page?
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
        document.cookie = 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        // const mutation = `mutation {
        //     createSessions(input: {expiration: "", issued: "", token: ""}){
        //       token
        //     }
        //   }
        //   `
        return true
        
    }

    function displayPage() {
        if(!getAccessToken()){
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
