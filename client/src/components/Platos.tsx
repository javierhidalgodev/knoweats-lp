import Carousel from "./Carousel"

const Platos = () => {
    return (
        <section id='tienes-que-probar' className='mx-auto mt-14 px-6 lg:px-2 max-w-5xl flex max-lg:flex-col gap-6 overflow-hidden'>
            <div className='tienes-que-probar__container w-full flex flex-col'>
              <h3 className='tienes-que-probar__title mb-5 text-4xl font-extrabold text-black text-balance text-center'>Tienes que probar</h3>
              <Carousel />
            </div>
          </section>
    )
}

export default Platos