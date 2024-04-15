import { Shelf } from "./components/Shelf"
import { Benefits } from "./components/Benefits"
import { Brands } from "./components/Brands"
import { Header } from "./components/Header"
import { Slider } from "./components/Slider"
import { InforCard } from "./components/InfoCard"
import { Footer } from "./components/Footer"
import ModalNewsletter from "./components/Newsletter/modal"

function App() {

  return (
    <div className="min-h-full">
      <Header />
      <main className="bg-[#fafafa]">
        <section className="mb-6">
          <Slider />
        </section>
        <section className="mb-10 lg:mb-20">
          <div className="container mx-auto">
              <h2 className="font-bold text-center mb-4">Por que comprar na Maeztra?</h2>
              <Benefits />
          </div>          
        </section>
        <section className="mb-10 lg:mb-20">
          <div className="container mx-auto">
              <h2 className="font-bold text-2xl text-center mb-4">Marcas Parceiras</h2>
              <Brands />
          </div>          
        </section>
        <section className="mb-10 lg:mb-20">
          <div className="container mx-auto">
              <h2 className="font-bold text-2xl text-center mb-4">As Mais Pedidas</h2>
              <Shelf />
          </div>          
        </section>
        <section className="mb-10 lg:mb-20 px-7">
          <div className="container mx-auto">
              <InforCard />
          </div>          
        </section>
      </main>
      <Footer />
      <ModalNewsletter />
    </div>
  )
}

export default App
