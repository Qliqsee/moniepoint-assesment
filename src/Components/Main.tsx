import Header from "./Header";
import Section1 from "./Section1";

const Main = () => {
  return (
    <>
      <Header />
      <section id="section-1">
        <Section1 />
      </section>
      <section id="section-2">
        <Section1 />
      </section>
      <section id="section-3">
        <Section1 />
      </section>
    </>
  );
};

export default Main;
