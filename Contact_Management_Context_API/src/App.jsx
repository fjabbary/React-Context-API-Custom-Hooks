import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Contacts from "./components/Contacts";
import { contactsData } from "./contactsData";

export const Context = React.createContext();

function App() {
  const [contacts, _] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState({});

  const contextValue = {
    contacts,
    selectedContact,
    setSelectedContact,
  };

  return (
    <Context.Provider value={contextValue}>
      <Container className="w-75 mt-5 bg-light p-5 border">
        <h1 className="text-primary text-center mb-5">Contact Manager</h1>
        <Contacts />
      </Container>
    </Context.Provider>
  );
}

export default App;
