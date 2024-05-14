import Layout from './Layout.tsx'
import Main from './components/Main.tsx'
import ComeBien from './components/ComeBien.tsx'
import Platos from './components/Platos/Platos.tsx'
import Ventajas from './components/Ventajas.tsx'
import Oferta from './components/Oferta.tsx'
import FAQs from './components/FAQs/FAQs.tsx'
import Partners from './components/Partners.tsx'

const App = () : JSX.Element => {

  return (
    <>
      <Layout>
        <main className='bg-white text-black'>
          <Main />
          <ComeBien />
          <Platos />
          <section id="scroller" className='mt-14 p-8 bg-green text-white text-4xl font-extrabold [&>*]:text-nowrap overflow-hidden'>
            <div id="scroller-inner" className='w-fit flex flex-nowrap gap-6'>
              <span>¡Más que comida!</span>
              <span>·</span>
              <span>Somos plastic neutral</span>
              <span>·</span>
              <span>+1500kg de plástico recogidos del mar</span>
              <span>·</span>
              <span>Gravity Wave certificate</span>
              <span>·</span>
              <span>¡Más que comida!</span>
              <span>·</span>
              <span>Somos plastic neutral</span>
              <span>·</span>
              <span>+1500kg de plástico recogidos del mar</span>
              <span>·</span>
              <span>Gravity Wave certificate</span>
              <span>·</span>
            </div>
          </section>
          {/* <section id="testimonials" className='max-w-5xl max-md:mt-12 mx-auto p-10 flex flex-col items-center gap-6 overflow-hidden'>
            <div className="testimonials__header flex flex-col items-center">
              <h4 className='text-lg'>¿SABES COMER?</h4>
              <h3 className='tienes-que-probar__title w-fit mb-5 text-4xl font-extrabold text-black text-balance self-center'>Gente que come con nosotros</h3>
            </div>
            <div className="testimonials__instagram"></div>
          </section> */}
          <Ventajas />
          <Oferta />
          <FAQs />
          <Partners />
        </main>
      </Layout>
    </>
  )
}

export default App
