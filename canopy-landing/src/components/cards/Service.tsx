interface ServiceProps {
    title: string,
    description: string,
    icon: React.ReactNode;
    image: string;
}

import { Paragraph } from "../shared/Paragraph"

export const Service = ({title, description, icon, image}: ServiceProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden flex flex-col">
            <div className="flex items-center space-x-4 mb-4">
                <div className="rounded-xl bg-body p-3 text-heading-1 w-max">
                    {icon}
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">
                    {title}
                </h2>
            </div>
            <div className="flex-grow mb-4">
                <Paragraph className="text-body-text">{description}</Paragraph>
            </div>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-3xl">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover object-center" 
                />
            </div>
        </div>
    )
}