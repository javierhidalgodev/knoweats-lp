import { useState } from "react"
import faqs from "../../mocks/faqs.json"
import FAQ from "./FAQ"

const FAQs = () => {
    const [expanded, setExpanded] = useState<boolean | string>(false)

    const handleExpanded = (e : React.MouseEvent) => {
        console.log(e.currentTarget.getAttribute('data-expanded'))
        const panel = e.currentTarget.getAttribute('data-expanded')


        panel === expanded
            ? setExpanded(false)
            : setExpanded(panel || '')
    }

    return (
        <section id="faqs" className='mt-14 mx-auto max-w-5xl px-6 lg:px-2 flex flex-col items-center gap-6 text-balance'>
            <div className="faqs__header flex flex-col items-center text-center">
                <h4 className='text-lg'>TE AYUDAMOS A LO QUE NECESITES</h4>
                <h3 className='faqs__title w-fit text-4xl font-extrabold text-black text-balance'>¿ALGUNA DUDA?</h3>
            </div>

            <div className="faqs__container w-full flex flex-col [&>*]:p-3 [&>*:hover]:bg-[#ecf1ee] [&>*]:border-b [&>*]:border-black [&>*:first-of-type]:border-t">
                {
                    faqs.map((faq, index) => <FAQ handleExpanded={handleExpanded} expanded={expanded} key={crypto.randomUUID()} faq={faq} index={index} />)
                }
            </div>
        </section>
    )
}

export default FAQs