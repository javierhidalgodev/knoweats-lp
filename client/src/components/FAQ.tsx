import { MouseEventHandler, useState } from "react"

type Props = {
    faq : {
        question: string;
        answer: string[];
    },
    expanded: string | boolean;
    handleExpanded: MouseEventHandler<HTMLDivElement> | undefined;
    index: number
}

const FAQ = ({ faq, expanded, handleExpanded, index }: Props) => {

    return (
        <div className={`faqs__container-faq flex flex-col gap-6 ${expanded !== `panel${index}` && 'isHidden'}`} data-expanded={`panel${index}`} onClick={handleExpanded}>
            <div className="faq__header w-full flex justify-between text-xl font-bold">
                <span>{faq.question}</span>
                <button>+</button>
            </div>
            <div className="faq__description flex flex-col gap-6">
                {
                    faq.answer.map(pa => (
                        <div key={crypto.randomUUID()} dangerouslySetInnerHTML={{ __html: pa
                         }}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ