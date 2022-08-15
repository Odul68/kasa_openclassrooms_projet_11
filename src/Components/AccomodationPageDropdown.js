import Accordion from "react-bootstrap/Accordion";

export default function AccomodationDropdown({ accomodation }) {
  return (
    <Accordion
      className="accordionAccomodation"
      defaultActiveKey="0"
      alwaysOpen // stays open when others are clicked on
    >
      <Accordion.Item className="accordionItemAccomodation" eventKey="0">
        <Accordion.Header className="accordionHeaderAccomodation">
          Description
        </Accordion.Header>
        <Accordion.Body className="accordionBodyAccomodation">
          {accomodation.description}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="accordionItemAccomodation" eventKey="1">
        <Accordion.Header className="accordionHeaderAccomodation">
          Équipements
        </Accordion.Header>
        <Accordion.Body className="accordionBodyAccomodation">
          {accomodation.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
