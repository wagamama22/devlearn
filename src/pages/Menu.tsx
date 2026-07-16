import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonItem,
  IonLabel,
  IonList,
  IonIcon

} from "@ionic/react";
import { homeSharp, imageSharp, callSharp } from 'ionicons/icons';

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="morgan-devlearn">
      <IonHeader>
        <IonToolbar color={"light"}>
          <IonTitle>Select</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem routerLink="/Home">
            <IonIcon icon={homeSharp} className="ion-padding" color="success"/>
            <IonLabel>
              Home
            </IonLabel>
          </IonItem>
           <IonItem routerLink="/Contact">
            <IonIcon icon={callSharp} className="ion-padding" color="danger"/>
            <IonLabel>
              Contact
            </IonLabel>
          </IonItem>
           <IonItem routerLink="/Gallery">
            <IonIcon icon={imageSharp} className="ion-padding" color="dark"/>
            <IonLabel>
              Gallery
            </IonLabel>
          </IonItem>
         
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
