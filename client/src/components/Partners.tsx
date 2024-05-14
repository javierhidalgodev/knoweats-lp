import partners from '../mocks/partners.json'

const Partners = () => {
    return (
        <section id='partners' className='mt-14 mx-auto px-6 flex flex-wrap justify-center gap-6 [&>*]:max-w-[200px] select-none'>
            {
                partners.map(partner => <img src={`./${partner.img}`} title={`${partner.partner}`} alt={`${partner.partner}`} key={crypto.randomUUID()} />)
            }
            {/* <img src="./alicanteplaza.bmp" alt="Alicante Plaza logo" />
            <img src="./rtve.bmp" alt="Radio Televisión Española logo" />
            <img src="./ocu.bmp" alt="OCU logo" />
            <img src="./elmundo.bmp" alt="El Mundo logo" />
            <img src="./cosmopolitan.bmp" alt="Cosmopolitan logo" /> */}
        </section>
    )
}

export default Partners