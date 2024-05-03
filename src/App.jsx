import  { CustomerReviews,Nav,Footer, Hero, PopularProducts, Services, Subscribe, SuperOffer, SuperQuality }from './sections';
import './index.css'
function App() {
  return (
    <main className="">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding">
        <Services/>
      </section>
      <section className="padding">
        <SuperOffer/>
      </section>
      <section className="padding">
        <CustomerReviews/>
      </section>
      <section className="padding">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8 max-lg:mt-14">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
