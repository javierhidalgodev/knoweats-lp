interface MenuItem {
    name: string,
    status?: string,
    img: string,
    imgAlt: string
    weight: number,
    allergens: string[],
    price: number,
    macros: {
        kilocalories: number,
        proteins: number,
        carbohydrates: number,
        fats: number
    }
}

const CarouselCard = ({ item }: { item: MenuItem }) => {
    return (
        <div className="tienes-que-probar__card flex flex-col min-w-[298px] max-w-[320px] bg-[#f5f6f9] rounded-xl overflow-hidden cursor-grab select-none">
            <div className="tienes-que-probar__card-img relative">
                {
                    item.status &&
                        <span className="tienes-que-probar__card-status absolute bottom-4 left-4 px-6 py-2 bg-black text-white text-xs font-bold rounded-full">{item.status?.toUpperCase()}</span>
                }
                <img src={`${item.img}`} alt={`${item.imgAlt}`} />
            </div>
            <div className="tienes-que-probar__card-description p-4 flex flex-col gap-4 h-full">
                <h6 className="tienes-que-probar__card-title font-bold">
                    {item.name}
                </h6>
                <div className='flex flex-col gap-4 mt-auto'>
                    <div className="tienes-que-probar__card-info w-full flex justify-between">
                        <div className="tienes-que-probar__card-price-size">
                            <small className='text-slate-500'>({item.weight}g)</small>
                            <p className='text-lg font-bold'>{item.price}€</p>
                        </div>
                        <div className="tienes-que-probar__card-alergenos flex gap-2">
                            {
                                item.allergens.map(item => <img src={`./src/assets/${item}.svg`} alt={item} className="w-6" key={crypto.randomUUID()} />
                                )
                            }
                        </div>
                    </div>
                    <div className="tienes-que-probar__card-macros p-2 flex justify-evenly bg-white rounded-lg">
                        <div className="tienes-que-probar__macros-pill text-center">
                            <p className="macro-value text-xs font-medium">{item.macros.kilocalories}</p>
                            <p className="macro-tittle text-[10px] text-slate-600">Kilocalorías</p>
                        </div>
                        <div className="tienes-que-probar__macros-pill text-center">
                            <p className="macro-value text-xs font-medium">{item.macros.proteins}g</p>
                            <p className="macro-tittle text-[10px] text-slate-600">Proteínas</p>
                        </div>
                        <div className="tienes-que-probar__macros-pill text-center">
                            <p className="macro-value text-xs font-medium">{item.macros.carbohydrates}g</p>
                            <p className="macro-tittle text-[10px] text-slate-600">Carbohidratos</p>
                        </div>
                        <div className="tienes-que-probar__macros-pill text-center">
                            <p className="macro-value text-xs font-medium">{item.macros.fats}g</p>
                            <p className="macro-tittle text-[10px] text-slate-600">Grasas</p>
                        </div>
                    </div>
                    <button disabled={!!item.status} className="tienes-que-probar__card-button w-full py-3 bg-orange text-white font-extrabold rounded-full hover:bg-opacity-90 disabled:bg-slate-400 disabled:cursor-not-allowed">
                        {
                            item.status
                                ? item.status?.toUpperCase()
                                : 'AÑADIR'
                        }</button>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard