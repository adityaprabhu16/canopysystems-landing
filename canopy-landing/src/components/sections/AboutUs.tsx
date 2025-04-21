
import { Container } from "../shared/Container"
import { Title } from "../shared/Title"
import { Paragraph } from "../shared/Paragraph"
import { Info } from "../cards/Info"


export const AboutUs = () => {
    return (
    <section id="about-us">
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5/12 lg:w-1/2">
                <div className="w-full h-96 sm:h-[500px] relative">
                    <img src="/assets/irrigation/Irrigation.png" className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10" alt="About Our Mission"/>
                </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                <Title>About Our Modular Solution</Title>
                <Paragraph>
                    <br />
                    This kit was built out of a love for plants and a frustration with complicated hydroponic setups. We wanted to bridge the gap between passionate plant growers and smart home enthusiasts — without requiring an engineering degree. 
                    <br />
                    <br />
                    By combining the power of open-source Home Assistant with easy-to-use hardware, we’re creating a future where growing food is as easy as plugging in your phone.
                    Whether you’re growing lettuce in your apartment or herbs in your kitchen, this kit empowers you to start growing with confidence, insight, and control.
                </Paragraph>
                <div className="pt-8 grid grid-cols-1 sm:grids-cols-2 gap-4 max-w-3xl">
                    <Info title="Mission" description="To make home hydroponics simple, smart, and accessible — empowering more people to grow their own food with technology they can trust.">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>
                    </Info>
                    <Info title="Vision" description="A world where anyone, anywhere can grow fresh, healthy food at home with minimal effort — through beautiful, intuitive, and sustainable automation.">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                            />
                        </svg>
                    </Info>
                </div>
            </div>
        </Container>
    </section>
    )
}