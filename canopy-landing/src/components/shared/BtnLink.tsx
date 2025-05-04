interface BtnLinkProps {
    href: string;
    text: string;
    className?: string;
}

export const BtnLink = ({href, text, className=""}: BtnLinkProps) => {
    return (
        <a href={href} className={`${className} px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-blue-500 cursor-pointer transform transition hover:scale-100`}
        style={{
            backgroundColor: '#3B82F6', //Tailwind css blue
            color: 'white' 
        }}>
            <span className="relative z-10 text-white">{text}</span>
        </a>
    )
}