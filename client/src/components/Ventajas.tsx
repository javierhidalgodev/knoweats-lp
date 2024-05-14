import { BrandLogoBG } from "./icons/BrandLogoBG"
import { Cancel } from "./icons/CancelIcon"
import { CheckIcon } from "./icons/CheckIcon"
import { QuestionIcon } from "./icons/QuestionIcon"

const Ventajas = () => {
    return (
        <section id="ventajas" className='mx-auto mt-14 lg:px-2 max-w-5xl'>
            <div className='p-6 lg:p-10 bg-[#ecf1ee] flex flex-col items-center gap-6 lg:rounded-xl'>
                <div className="ventajas__header flex flex-col items-center text-balance">
                    <h4 className='text-lg text-center'>¿LISTO PARA RECUPERAR TU TIEMPO? </h4>
                    <h3 className='tienes-que-probar__title w-fit mb-5 text-4xl font-extrabold text-black text-center'>Hacemos tu vida más fácil</h3>
                </div>
                <div className="w-full overflow-x-auto">
                    <table className='border-separate border-spacing-2 [&_th]:min-w-[100px] [&_td]:p-4 [&_td]:bg-white [&_th]:max-md:text-xs [&_td]:max-md:text-xs'>
                        <thead>
                            <tr className="[&>*]:p-4 [&>*]:bg-white">
                                <th className="!min-w-[200px] text-lg">Ventajas</th>
                                <th>
                                    <BrandLogoBG width={80} />
                                </th>
                                <th>CAJA DE RECETAS</th>
                                <th>APPS DELIVERY</th>
                                <th>HACERLO TÚ MISM@</th>
                            </tr>
                        </thead>
                        <tbody className='[&_svg]:mx-auto'>
                            <tr>
                                <td><b>Comodidad</b>, sin preparar, cocinar, limpiar... <b>¡Tiempo para ti!</b></td>
                                <td><CheckIcon width={30} /></td>
                                <td><Cancel width={35} /></td>
                                <td><CheckIcon width={30} /></td>
                                <td><Cancel width={35} /></td>
                            </tr>
                            <tr>
                                <td>La comida de la semana en una sola entrega, <b>sin ir a comprar cada día</b>.</td>
                                <td><CheckIcon width={30} /></td>
                                <td><CheckIcon width={30} /></td>
                                <td><Cancel width={35} /></td>
                                <td><Cancel width={35} /></td>
                            </tr>
                            <tr>
                                <td><b>Comida variada, sana y equilibrada</b>, con producto de calidad.</td>
                                <td><CheckIcon width={30} /></td>
                                <td><CheckIcon width={30} /></td>
                                <td><Cancel width={35} /></td>
                                <td><QuestionIcon width={35} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <img src="./tabla-comparativa-knoweats.svg" alt="" className='max-w-[750px]' /> */}
        </section>
    )
}

export default Ventajas