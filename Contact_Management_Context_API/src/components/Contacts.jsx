import { useState, useContext } from "react";
import { Context } from "../App";
import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contacts = () => {
  const data = useContext(Context);

  const { contacts, selectedContact, setSelectedContact } = data;

  return (
    <Container fluid>
      <Row>
        <Col>
          <ListGroup>
            {contacts.map((contact) => (
              <ListGroup.Item
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
              >
                {contact.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col>
          {selectedContact && (
            <div>
              <h2>{selectedContact.name}</h2>
              <ul className="contact-info">
                <li className="mb-3">{selectedContact.email}</li>
                <li className="mb-3">{selectedContact.phone}</li>
                <li className="mb-3">{selectedContact.address}</li>
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
