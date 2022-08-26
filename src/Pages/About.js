import AboutBackground from "../Components/AboutBackground";
import Dropdown from "../Components/Dropdown";
import AboutData from "../Components/AboutAccordionData";

export default function About() {
  return (
    <>
      <AboutBackground />
      <div className="aboutDropdownSection">
        {AboutData.map((item, index) => (
          <Dropdown title={item.title} content={item.content} key={index} />
        ))}
      </div>
    </>
  );
}
