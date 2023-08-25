import {Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscribe,Footer} from "./index"
import Nav from "./components/Nav"
function App() {
  

  return (
    <div className=" ">
      <Nav/>
      <section className=' padding-b xl:padding-l wide:padding-r'>
      <Hero/>
      </section>
      
      <section className='padding '>
        <PopularProducts/>
      </section>
      <section className='padding '>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10 '>
        <Services/>
      </section>
      <section className='padding '>
        <SpecialOffer/>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='padding-x bg-black padding-t pb-8 '>
        <Footer/>
      </section>
    </div>
  )
}

export default App
