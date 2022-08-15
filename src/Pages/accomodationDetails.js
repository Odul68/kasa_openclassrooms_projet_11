import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccomodationDropdown from "../Components/AccomodationPageDropdown";
import AccomodationGallery from "../Components/AccomodationPageGallery";
import AccomodationPageInformation from "../Components/AccomodationPageInfo";

const fetchAccomodation = async () => {
  const res = await fetch("../accomodation.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await res.json(); // returns datas from the accomodation.json file
};

export default function GoToAccomodation() {
  const { accomodationId } = useParams(); // access parameters of the currents route
  const [accomodation, setAccomodation] = useState(null);

  useEffect(() => {
    fetchAccomodation().then((accomodations) => {
      const accomodation = accomodations.find(
        (item) => item.id === accomodationId
      );
      setAccomodation(accomodation);
    });
  }, [accomodationId]);
  return accomodation ? ( // returns datas according to the accomodationId
    <>
      <AccomodationGallery accomodation={accomodation} />
      <AccomodationPageInformation accomodation={accomodation} />
      <AccomodationDropdown accomodation={accomodation} />
    </>
  ) : (
    "loading"
  );
}
