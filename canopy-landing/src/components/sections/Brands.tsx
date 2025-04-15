import { Container } from "../shared/Container"
import { Title } from "../shared/Title";

const logos = ["discord", "openai", "paypal", "slack", "spotify", "uber", "youtube"]

export const Brands = () => {
    return <section>
        <Container className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
                <Title>Trusted by Industry Leaders</Title>
            </div>
            <div className="flex justify-center flex-wrap gap-4 group">
                {logos.map((logo) => (
                    <div key={logo} className="group inline-block">
                        <img
                        src={`src/assets/logos/${logo}.png`}
                        width="100"
                        height="60"
                        alt={logo}
                        className="h-7 sm:h-10 w-auto grayscale transition duration-300 ease-linear group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                    ))
                }
            </div>
        </Container>
    </section>
}