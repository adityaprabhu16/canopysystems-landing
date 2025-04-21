import { Container } from "../shared/Container"
import { Title } from "../shared/Title";

const logoDetails = [
    { 
        name: "instagram", 
        color: "group-hover:scale-110 group-hover:brightness-125",
        brandColor: "grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300",
        href: "https://www.instagram.com/canopy_systems_/"
    },
    { 
        name: "linkedin", 
        color: "group-hover:scale-110 group-hover:brightness-125",
        brandColor: "grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300",
        href: "https://www.linkedin.com/company/canopy-systems/?viewAsMember=true"
    },
    { 
        name: "youtube", 
        color: "group-hover:scale-110 group-hover:brightness-125",
        brandColor: "grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300",
        href: "https://www.youtube.com/@CanopySystemsTech"
    }
]

export const Brands = () => {
    return <section>
        <Container className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
                <Title>Check us out!</Title>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
                {logoDetails.map(({ name, href }) => (
                    <div 
                        key={name} 
                        className="group inline-block hover:z-10"
                    >
                        <a href={href} className="block" target="_blank" rel="noopener noreferrer">
                            <img
                                src={`/assets/logos/${name}.png`}
                                width="100"
                                height="60"
                                alt={name}
                                className={`h-7 sm:h-10 w-auto transition duration-300 ease-linear 
                                    grayscale brightness-50 
                                    group-hover:grayscale-0 group-hover:brightness-100 
                                    group-hover:scale-110
                                    peer`}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </Container>
    </section>
}