import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccomodationDropdown from "../Components/AccomodationPageDropdown";
import AccomodationGallery from "../Components/AccomodationPageGallery";
import AccomodationPageInformation from "../Components/AccomodationPageInfo";

const fetchAccomodation = async (id) => {
  const res = await fetch("../accomodation.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await res.json();
};

export default function GoToAccomodation() {
  const { accomodationId } = useParams();
  const [accomodation, setAccomodation] = useState(null);

  useEffect(() => {
    fetchAccomodation().then((accomodations) => {
      const accomodation = accomodations.find(
        (item) => item.id === accomodationId
      );
      setAccomodation(accomodation);
    });
  }, [accomodationId]);
  console.log(accomodation);
  return accomodation ? (
    <>
      <AccomodationGallery accomodation={accomodation} />
      <AccomodationPageInformation accomodation={accomodation} />
      <AccomodationDropdown accomodation={accomodation} />
    </>
  ) : (
    "loading"
  );
}
