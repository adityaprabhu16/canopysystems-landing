
interface ServiceProps {
    title: string,
    description: string,
    icon: React.ReactNode;
}

import { Paragraph } from "../shared/Paragraph"

export const Service = ({title, description, icon}: ServiceProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
            <div>{icon}</div>
            <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    )
}