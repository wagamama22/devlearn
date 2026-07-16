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
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonText,
  IonList,
  IonInput,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const historyData = useHistory();
  useEffect(() => {
    const cartStorage = localStorage.getItem("cartData");
    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    }
  }, []);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [address, setAddress] = useState("");
  const [mystatus, setMystatus] = useState("");
  const [editcartid, setEditcartid] = useState<number | null>(null);
  const [cart, setCart] = useState<any[]>([]);
  const cartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  const addtocartfunc = () => {
    //validate userinputs
    if (!product || !quantity || !address || !mystatus) {
      alert("The input text fiels cannot be left empty");
      return;
    }
    if (Number.isNaN(quantity) || quantity <= 0) {
      alert("Quantity field cannot contain a letter, negative or 0 value");
      return;
    }
    const price = product === "starter" ? 20 : 50;
    //create new order object
    const neworder = {
      id: editcartid ? editcartid : Date.now(),
      product,
      quantity,
      address,
      mystatus,
      total: price * quantity,
    };
    //add neworder to existing cart and store it in setCart
    setCart([...cart, neworder]);
    setEditcartid(null);
    //reset the form
    setProduct("");
    setQuantity(0);
    setAddress("");
    setMystatus("");
  };
  const handleproductevent = (event: any) => {
    const userproduct = event.target.value;
    setProduct(userproduct);
  };
  const handlequantityevent = (event: any) => {
    const userquantity = parseInt(event.target.value || "0");
    setQuantity(userquantity);
  };
  const handleaddressevent = (event: any) => {
    const useraddress = event.target.value || "";
    setAddress(useraddress);
  };
  const handlemystatusevent = (event: any) => {
    const userstatus = event.target.value;
    setMystatus(userstatus);
  };

  const editcartfunc = (item: any) => {
    setProduct(item.product);
    setQuantity(item.quantity);
    setAddress(item.address);
    setMystatus(item.mystatus);
    setEditcartid(item.id);
    setCart(cart.filter((eItem) => eItem.id !== item.id));
    movetoform();
  };
  const movetoform = () => {
    cartRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const deletecartfunc = (id: number) => {
    setCart(cart.filter((item) => item.id !== id)); //similar to a for looop
  };
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
                <IonCardContent>
                  <div ref={cartRef}>
                    <IonList>
                      <IonItem>
                        <IonSelect
                          placeholder="Select Package"
                          labelPlacement="stacked"
                          value={product}
                          onIonChange={handleproductevent}
                        >
                          <div slot="label">
                            Select Package <IonText color="danger">*</IonText>
                          </div>
                          <IonSelectOption value="starter">
                            Starter's Package £20
                          </IonSelectOption>
                          <IonSelectOption value="pro">
                            Professional's Package £50
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <IonItem>
                        <IonLabel>
                          <IonInput
                            labelPlacement="stacked"
                            id="quantity"
                            type="number"
                            placeholder="Enter the quantity"
                            min="0"
                            value={quantity}
                            onIonInput={handlequantityevent}
                          >
                            <div slot="label">
                              Quantity <IonText color="danger">*</IonText>
                            </div>
                          </IonInput>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>
                          <IonInput
                            labelPlacement="stacked"
                            id="address"
                            type="text"
                            placeholder="Enter your address"
                            value={address}
                            onIonInput={handleaddressevent}
                          >
                            <div slot="label">
                              Address <IonText color="danger">*</IonText>
                            </div>
                          </IonInput>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>
                          <div>
                            Choose Gender <IonText color="danger">*</IonText>
                          </div>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonRadioGroup
                          value={mystatus}
                          onIonChange={handlemystatusevent}
                        >
                          <IonRadio value="m" slot="start" labelPlacement="end">
                            Male
                          </IonRadio>
                          <br />
                          <br />
                          <IonRadio value="f" slot="start" labelPlacement="end">
                            Female
                          </IonRadio>
                        </IonRadioGroup>
                      </IonItem>
                      <IonItem>
                        <div className="ion-text-center">
                          <IonButton
                            fill="solid"
                            color={"dark"}
                            onClick={addtocartfunc}
                          >
                            {editcartid ? "edit cart" : "Add To Cart"}
                          </IonButton>
                        </div>
                      </IonItem>
                    </IonList>
                  </div>
                </IonCardContent>
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
                        <div className="ion-text-center">
                          <IonButton
                            fill="solid"
                            color={"dark"}
                            onClick={() => editcartfunc(item)}
                          >
                            Edit
                          </IonButton>
                        </div>
                        <div className="ion-text-center">
                          <IonButton
                            fill="solid"
                            color={"dark"}
                            onClick={movetoform}
                          >
                            Add
                          </IonButton>
                        </div>
                        <div className="ion-text-center">
                          <IonButton
                            fill="solid"
                            color={"dark"}
                            onClick={() => deletecartfunc(item.id)}
                          >
                            Delete
                          </IonButton>
                        </div>{" "}
                      </IonItem>
                    </IonList>
                  ))}
                  {cart.length > 0 && (
                    <div className="ion-text-center">
                      <IonButton
                        fill="solid"
                        color={"dark"}
                        expand="block"
                        onClick={() => historyData.push("/Dashboard")}
                      >
                        Checkout Now
                      </IonButton>
                    </div>
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

export default Home;
