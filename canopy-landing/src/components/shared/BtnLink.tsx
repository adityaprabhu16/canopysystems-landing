interface BtnLinkProps {
    href: string;
    text: string;
    className?: string;
}

export const BtnLink = ({href, text, className=""}: BtnLinkProps) => {
    return (
        <a href={href} className={`${className} px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer transform transition hover:scale-[2.5]`}>
            <span className="relative z-10 text-white">{text}</span>
        </a>
    )
}