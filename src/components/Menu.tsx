import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, home } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/home',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Workouts',
    url: '/page/workouts',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Exercises',
    url: '/page/exercises',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Explore',
    url: '/page/explore',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'My Account',
    url: '/page/account',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {/* <IonListHeader>Inbox</IonListHeader> */}
          {/* <IonNote>hi@ionicframework.com</IonNote> */}
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
