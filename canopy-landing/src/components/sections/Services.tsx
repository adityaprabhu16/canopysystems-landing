import { services } from "../../utils/services-data";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Service } from "../cards/Service"; 

export const Services = () => {
    return (
    <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title>Our Features</Title>
                <Paragraph>
                🌿 All-in-one smart grow kit with sensors, automation, and real-time monitoring — no coding, no cloud, just healthy plants.
                </Paragraph>
            </div>
            <div className="grid sm:grids-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
                {
                    services.map((service, key) => (
                        <Service key={key} title={service.title} description={service.description} icon={service.icon} image={service.imgSrc}/>
                    ))
                }
            </div>
        </Container>
    </section>
    )
}