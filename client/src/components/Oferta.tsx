const Oferta = () => {
    return (
        <section id="oferta" className='mt-14 mx-auto max-w-5xl px-6 lg:px-2 flex max-md:flex-col gap-6 text-balance'>
            <div className="oferta__content flex flex-col gap-4 basis-2/3">
                <div className="oferta__content-header">
                    <h4 className='text-lg'>AHORA CON KNOWEATS...</h4>
                    <h3 className='oferta__title w-fit text-4xl font-extrabold text-black text-balance'>Pide más, paga menos.</h3>
                </div>
                <p>Obtén descuentos en cada uno de tus pedidos, cuanto más platos añadas, mayor será tu descuento...</p>
                <div className="oferta__description-list [&>*]:mb-3">
                    <p>A partir de <strong>8 platos:</strong> obtén un <strong>5%</strong> de descuento.</p>
                    <p>A partir de <strong>12 platos: 8%</strong> de descuento.</p>
                    <p>A partir de <strong>18 platos: 10%</strong> de descuento.</p>
                </div>
                <video autoPlay loop preload='metadata' className='max-w-[400px]'>
                    <source src="./oferta.mp4" type='video/mp4' />
                </video>
            </div>
            <div className="oferta__img basis-1/3">
                <img src="./tapers-knoweats.webp" alt="" className='w-full rounded-xl' />
            </div>
        </section>
    )
}

export default Oferta