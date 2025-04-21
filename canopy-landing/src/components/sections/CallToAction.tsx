import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph";
import { BtnLink } from "../shared/BtnLink";

export const CTA = () => {
    return (
    <section className="pb-20 relative">
        <Container>
            <div className="relative rounded-2xl overflow-hidden">
                <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">Quick start your at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">home hydroponic</span> grow operation.</h1>
                    <Paragraph className="pt-10">
                    Smarter plant care that fits right into your smart home — fully automated, locally controlled, and built for you.
                    </Paragraph>
                    <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                        <BtnLink href="#contact" text="Get in touch."/>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    )
}