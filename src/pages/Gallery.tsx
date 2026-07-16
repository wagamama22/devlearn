import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Gallery: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark" class="ion-text-center">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Product Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle></IonCardTitle>
                  <IonCardSubtitle color={"danger"} class="ion-text-center">
                    Swipe from left to right to view our gallery
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    speed={500}
                    style={{
                      display: "block",
                      margin: "0 auto",
                      width: "80%",
                      height: "auto",
                    }}
                  >
                    <SwiperSlide>
                      <img src="img1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="img2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="img3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="img4.png" />
                    </SwiperSlide>
                  </Swiper>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
