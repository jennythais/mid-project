import React from "react";
import ContactForm from "./ContactForm";
import ContactSideBar from "./ContactSideBar";
import ContactTitle from "./ContactTitle";

const ContactPage = () => {
    const handleSubmitForm = (formData) => {
        
    }
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <ContactTitle/>   
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <ContactSideBar/>
            <ContactForm handleSubmitForm={handleSubmitForm}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
