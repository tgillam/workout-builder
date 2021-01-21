import React, { useState } from 'react';
import './HomeContainer.css';
// import Cookies from 'js-cookie';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonItem, IonInput, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom'


interface ContainerProps {
  name: string;
}

const HomeContainer: React.FC<ContainerProps> = () => {
    const history = useHistory();
    
  return (
    <div className="container">
    <IonCard button={ true } onClick={ () => history.push(`/page/exercises`)} className="first-card">
            <IonCardHeader>
              <IonCardTitle>Find a new exercise today</IonCardTitle>
            </IonCardHeader>
          <IonCardContent>
          </IonCardContent>
    </IonCard>
    <IonCard button={ true } onClick={ () => history.push(`/page/explore`)} className="second-card">
            <IonCardHeader>
              <IonCardTitle>Explore</IonCardTitle>
            </IonCardHeader>
      
          <IonCardContent>
          </IonCardContent>
    </IonCard>
    <IonCard button={ true } onClick={ () => history.push(`/page/workouts`)} className="third-card">
            <IonCardHeader>
              <IonCardTitle>Click to log your workout now!</IonCardTitle>
            </IonCardHeader>
      
          <IonCardContent>
          </IonCardContent>
    </IonCard>
  </div>
  
  );
};

export default HomeContainer;
