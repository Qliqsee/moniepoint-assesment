import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Main = () => {
  return (
    <>
      <Header />
      <section id="section-1">
        <Section1 />
      </section>
      <section id="section-2">
        <Section2 />
      </section>
      <section id="section-3">
        <Section3 />
      </section>
    </>
  );
};

export default Main;
