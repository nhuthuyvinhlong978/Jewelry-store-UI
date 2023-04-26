import React from "react";
import ChatBot from "react-simple-chatbot";

const ChatBott = () => {
  const steps = [
    {
      id: "1",
      message: "Hi, Thank you for supporting the store!",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi, How can i help you?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: 1, label: "Product Enquiry", trigger: "5" },
        // { value: 2, label: "Product Complaint", trigger: "6" },
        { value: 3, label: "About US", trigger: "7" },
        { value: 4, label: "Nothing", trigger: "9" },
      ],
    },
    {
      id: "5",
      component: (
        <div>
          {" "}
          <a href="http://localhost:3000/shop?category=63e10de14d112e3e9cdd3035">
            Rings
          </a>{" "}
          <a href="http://localhost:3000/shop?category=63e10df14d112e3e9cdd3036">
            Necklaces
          </a>{" "}
          <a href="http://localhost:3000/shop?category=63e10df74d112e3e9cdd3037">
            Bracelets
          </a>{" "}
          <a href="http://localhost:3000/shop?category=63e10dfd4d112e3e9cdd3038">
            Pendants
          </a>{" "}
          <a href="http://localhost:3000/shop?category=63e10e034d112e3e9cdd3039">
            Anklets
          </a>{" "}
          <a href="http://localhost:3000/shop?category=6442b639cd88a70fa019738a">
            Earrings
          </a>{" "}
        </div>
      ),
      trigger: "8",
    },
    {
      id: "6",
      user: true,
      component: (
        <div>
          {" "}
          {/* <a href="http://localhost:3000/product/64018f024e09d719c8ca2807">
            JWDA Penant Lamp Brshed Steel
          </a> */}
        </div>
      ),
      trigger: "10",
    },
    {
      id: "7",
      component: (
        <div>
          {" "}
          <a href="http://localhost:3000/about">About Us</a>{" "}
        </div>
      ),
      trigger: "8",
    },
    {
      id: "8",
      message: "Anything else?",
      trigger: "4",
    },
    {
      id: "9",
      message: "Thank you for your visiting",
      trigger: "1",
    },
    {
      id: "10",
      message: "Thank you for complaint your about us product ",
      trigger: "1",
    },
  ];
  return (
    <ChatBot
      headerTitle="Chat box"
      speechSynthesis={{ enable: false, lang: "en" }}
      steps={steps}
      floating={true}
    />
  );
};

export default ChatBott;
