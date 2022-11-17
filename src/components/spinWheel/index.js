import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import React, { useState } from "react";

import WheelComponent from "./wheelComponent";

const firebaseConfig = {
  apiKey: "AIzaSyCJ8k5aQzCRxKkJmmhS3j6MLXB7b_TqhxY",
  authDomain: "ottywebsite.firebaseapp.com",
  projectId: "ottywebsite",
  storageBucket: "ottywebsite.appspot.com",
  messagingSenderId: "444112970382",
  appId: "1:444112970382:web:4d92aa714aa642af7f9fdf",
  measurementId: "G-CVT7CL9831",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const readData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

const addData = async (value) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const SpinWheel = () => {
  const [inputValue, setInputValue] = useState({ value: "" });

  const handleChange = (event) => {
    setInputValue({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    addData(inputValue.value);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="email"
            value={inputValue.value}
            onChange={(e) => handleChange(e)}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Wheel2 />
    </div>
  );
};

const Wheel2 = () => {
  const segments = [
    "20% OFF Your next order",
    "Free pack of Otty",
    "Otty sticker pack",
    "50% OFF Your next order",
    "Otty triple pack",
    "20% OFF Your next order",
    "6 Months subscription",
    "Otty sticker pack",
    "20% OFF Your next order",
    "Free pack of Otty",
    "50% OFF Your next order",
    "Otty sticker pack",
  ];
  const segColors = [
    "#426974",
    "#4BB7A6",
    "#426974",
    "#4BB7A6",
    "#426974",
    "#4BB7A6",
    "#426974",
    "#4BB7A6",
    "#426974",
    "#4BB7A6",
    "#426974",
    "#4BB7A6",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        textColor="#FFFFFF"
        primaryColor="#F9E76A"
        contrastColor="#F9E76A"
        isOnlyOnce={false}
        size={290}
        upDuration={200}
        downDuration={500}
        fontFamily="sans-serif"
      />
    </div>
  );
};

export default SpinWheel;
