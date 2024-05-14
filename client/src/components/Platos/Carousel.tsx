import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import menu from '../../mocks/platos.json'
import CarouselCard from './CarouselCard'

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ dragFree: true, align: 'start' }, [Autoplay({playOnInit: true, stopOnInteraction: false})])

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-5">
                {
                    menu.map(menuItem => <CarouselCard key={crypto.randomUUID()} item={menuItem} />)
                }
            </div>
        </div>
    )
}

export default Carousel