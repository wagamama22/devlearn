import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonText,
  IonList,
  useIonAlert,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Dashboard: React.FC = () => {
  const historyData = useHistory();
  useEffect(() => {
    const cartStorage = localStorage.getItem("cartData");
    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    }
  }, []);
  const [cart, setCart] = useState<any[]>([]);
  const [presentAlert] = useIonAlert();
  const grandOrderTotal = cart.reduce((sum, item) => sum + item.total, 0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"dark"} class="ion-text-center">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Morgan DevLearn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Morgan's Online Training Platform</IonCardTitle>
                  <IonCardSubtitle>For Web Developers </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  We offer a comprehensive online platform with interactive
                  courses covering in-demand web development skills and
                  programming languages for learners of all levels..
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Purchase Tutorial</IonCardTitle>
                </IonCardHeader>
                <IonCardContent></IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Items in the cart</IonCardTitle>
                  <IonCardSubtitle>click edit to edit cart</IonCardSubtitle>
                  <IonCardSubtitle>
                    Total Order : {cart.length} Order(s)
                  </IonCardSubtitle>
                  <IonCardSubtitle>
                    Grand Total : £{grandOrderTotal}
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  {cart.map((item) => (
                    <IonList key={item.id}>
                      <IonItem>Total Cost: £{item.total}</IonItem>
                      <IonItem>
                        <IonText>Package: {item.product}</IonText>
                      </IonItem>
                      <IonItem>
                        <IonText>Quantity: {item.quantity}</IonText>
                      </IonItem>
                      <IonItem>
                        <IonText>Address: {item.address}</IonText>
                      </IonItem>
                      <IonItem>
                        <IonText>Gender: {item.mystatus}</IonText>
                      </IonItem>
                      <IonItem>
                        <IonText color={"danger"}>This is the last item in this cart</IonText>
                      </IonItem>
                    </IonList>
                  ))}

                  {cart.length > 0 && (
                    <IonList>
                      <IonItem>
                        <div className="ion-text-center">
                          <IonButton
                            fill="solid"
                            color={"dark"}
                            onClick={() =>
                              presentAlert({
                                header: "Payment Confirmation",
                                subHeader: "Payment is Successful",
                                message:
                                  "You have completed the purchase of our product successfully",
                                buttons: ["Ok"],
                              })
                            }
                          >
                            Checkout
                          </IonButton>
                        </div>
                        <div className="ion-text-center">
                          <IonButton
                            fill="solid"
                            color={"dark"}
                            // expand="block"
                            onClick={() => historyData.push("/home")}
                          >
                            Back To Cart
                          </IonButton>
                        </div>
                      </IonItem>
                    </IonList>
                  )}
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
