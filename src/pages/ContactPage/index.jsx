import React from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";
import ContactSideBar from "./ContactSideBar";
import ContactTitle from "./ContactTitle";
import useMutation from "../../hooks/useMutation";
import { subscribeService } from "../../services/subscribeService";
import PATHS from "../../constants/paths";

const ContactPage = () => {
  const navigate = useNavigate();
  const { execute, data, loading, errorData } = useMutation(
    subscribeService.subcribe
  );
  const handleSubmitForm = (formData) => {
    const payload = {
      name: formData?.name || "",
      email: formData?.email || "",
      phone: formData?.phone || "",
      title: formData?.topic || "",
      description: formData?.content || "",
    };
    execute?.(payload, {
      onSuccess: (data) => {
        console.log("data", data);
        navigate(PATHS.MAIN);
      },
      onFail: (errorData) => {
        console.log("error", errorData);
      },
    });
  };
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <ContactTitle />
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <ContactSideBar />
            <ContactForm handleSubmitForm={handleSubmitForm} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
