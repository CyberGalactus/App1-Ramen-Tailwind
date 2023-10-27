import { MouseEventHandler, ReactNode } from "react";

interface SectionProps {
    title: string,
    subtitle: string,
    onclick: MouseEventHandler,
    className: string,
    children: ReactNode
}

const Section = ({title, subtitle, onclick, className, children}:SectionProps) => {
    return (
        <div className={`p-4 m-4 md:basis-1/2 text-center ${className}`}>
            <h3 className="text-4xl my-4 font-bold">{title}</h3>
            <p className="text-2xl mb-4">{subtitle}</p>
            {children}
            <button className="rounded-full bg-RamenBrown py-4 px-8 mt-8" onClick={onclick}>vote for {title}</button>
        </div>
    )
}

export default Section;