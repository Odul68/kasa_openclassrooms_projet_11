import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../Components/Dropdown";
import Slider from "../Components/Slider";
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
      <Slider images={accomodation.pictures} />
      <AccomodationPageInformation accomodation={accomodation} />
      <div className="accomodationDropdownSection">
        <div className="accomodationDropdownWrap">
          <Dropdown title="Description" content={accomodation.description} />
        </div>
        <div className="accomodationDropdownWrap">
          <Dropdown title="Équipements" content={accomodation.equipments} />
        </div>
      </div>
    </>
  ) : (
    "loading"
  );
}
