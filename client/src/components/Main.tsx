import mainIMG from '/cenital-mesa-platos-knoweats.webp'

const Main = () => {
    return (
        <section id='main' className='relative mt-40 mx-auto px-6 lg:px-2 max-w-5xl flex max-md:flex-col gap-6'>
            <div className={`main__description relative max-md:p-10 basis-1/2 max-md:bg-[url('${mainIMG}')] bg-cover max-md:text-white max-md:before:bg-black max-md:before:bg-opacity-60 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-[5] before:backdrop-blur-sm z-[5] rounded-xl overflow-hidden`}>
              <h3 className='main__description-title mb-5 text-5xl font-bold text-green max-md:text-white max-md:text-center'>Come sano toda la semana</h3>
              <div className="main__description-list md:text-md [&>p]:mb-3 text-balance">
                <p>Envíos a toda la península.</p>
                <p>Sin suscripciones, sin compromisos.</p>
                <p>Tu comida de la semana en una entrega.</p>
                <p>Sin cocina, sin limpiar... <strong>&nbsp;¡Listo en minutos!</strong></p>
              </div>
              <button className='main__description-button mt-4 px-8 py-4 max-md:w-full bg-orange text-white md:text-xl font-bold rounded-lg uppercase hover:bg-opacity-90'>Haz ya tu pedido</button>
            </div>
            <div className='basis-1/2 max-md:hidden'>
              <img src={mainIMG} alt='Imagen de cómida de la sección principal' className='main__img rounded-xl' />
            </div>
          </section>
    )
}

export default Main