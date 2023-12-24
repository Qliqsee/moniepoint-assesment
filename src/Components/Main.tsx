import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Main = () => {
  return (
    <>
      <Header />
      <section id="section-1">
        <Section1 />
      </section>
      <section id="section"></section>
      <section id="section"></section>
      <section id="section"></section>

      <section id="section-2">
        <Section2 />
      </section>
      {/* <section id="section-3">
        <Section1 />
      </section> */}
    </>
  );
};

export default Main;
