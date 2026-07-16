import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonButton,
  IonAlert,
} from "@ionic/react";
import { useState } from "react";

const Contact: React.FC = () => {
  const [myname, setMyname] = useState("");
  const [myemail, setMyemail] = useState("");
  const [myphone, setMyphone] = useState("");
  const [mymsg, setMymsg] = useState("");
  const [showalert, setShowalert] = useState(false);

  const contactfunc = () => {
    if (!myname || !myemail || !myphone || !mymsg) {
      alert("Required text fields must not be left empty");
      return;
    } 
    if (!isNaN(Number(myname))) {
      alert("full name cannot contain a number");
      return;
    }
    if (!myemail.includes("@") || !myemail.includes(".")) {
      alert("Please enter a valid email");
      return;
    }
    if (isNaN(Number(myphone))) {
      alert("phone number must contain only numbers");
      return;
    }
    showalertFunc();
  };
  const mynamefunc = (event: any) => {
    const myusername = event.detail.value;
    setMyname(myusername);
  };
  const myemailfunc = (event: any) => {
    const myuseremail = event.detail.value;
    setMyemail(myuseremail);
  };
  const myphonefunc = (event: any) => {
    const myuserphone = event.detail.value;
    setMyphone(myuserphone);
  };
  const mymsgfunc = (event: any) => {
    const myusermsg = event.detail.value;
    setMymsg(myusermsg);
  };
  const showalertFunc = () => {
    setShowalert(true)
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"dark"} class="ion-text-center">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contact Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Connect With Us</IonCardTitle>
                  <IonCardSubtitle>
                    {" "}
                    Keep Your Learning Moving Forward
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Have questions about learning web development or need guidance
                  on your coding journey? Reach out anytime. I’m here to help
                  you build skills, solve problems, and grow confidently as a
                  developer.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Talk To Us</IonCardTitle>
                  <IonCardSubtitle color={"danger"}>
                    Text fields marked with * must be filled
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem>
                      <IonLabel>
                        <IonInput
                          labelPlacement="stacked"
                          id="fname"
                          type="text"
                          placeholder="Enter your name and surname"
                          value={myname}
                          onIonInput={mynamefunc}
                        >
                          <div slot="label">
                            Fullname <IonText color="danger">*</IonText>
                          </div>
                        </IonInput>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <IonInput
                          labelPlacement="stacked"
                          id="email"
                          type="text"
                          placeholder="Enter your email address"
                          value={myemail}
                          onIonInput={myemailfunc}
                        >
                          <div slot="label">
                            Email <IonText color="danger">*</IonText>
                          </div>
                        </IonInput>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <IonInput
                          labelPlacement="stacked"
                          id="phone"
                          type="text"
                          placeholder="Enter your phone number"
                          value={myphone}
                          onIonInput={myphonefunc}
                        >
                          <div slot="label">
                            Phone Number <IonText color="danger">*</IonText>
                          </div>
                        </IonInput>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>
                        <IonInput
                          labelPlacement="stacked"
                          id="msg"
                          type="text"
                          placeholder="Enter your message"
                          value={mymsg}
                          onIonInput={mymsgfunc}
                        >
                          <div slot="label">
                            Mwssage <IonText color="danger">*</IonText>
                          </div>
                        </IonInput>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
                <div className="ion-text-center">
                  <IonButton
                    fill="solid"
                    color={"dark"}
                    onClick={contactfunc}
                    id="contact-alert"
                  >
                    Send Now
                  </IonButton>
                </div>
                <IonAlert
                  isOpen ={showalert}
                  header="Contact Form Subnission"
                  subHeader="Form submitted successfully"
                  message="A member of our support team will reach out to you soon."
                  buttons={["ok"]}
                ></IonAlert>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
