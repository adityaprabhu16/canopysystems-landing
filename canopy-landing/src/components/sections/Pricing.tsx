import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import {pricingPlans} from "../../utils/pricing-plan";

export const Pricing = () => {
    return (
    <section id="gallery" className="py-5">
        {/* Pricing Section */}
        <Container className="text-center">
            <Title>Gallery</Title>
            <Paragraph className="mt-4">Monitor and control the 3 Important Metrics in addition to light.</Paragraph>
        </Container>
        <Container className="mt-12"> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, key) => (
                    <div key={key} className="relative group h-full">
                        <div className="bg-gradient-to-r from-blue-800 to-green-800 p-1 rounded-3xl h-full">
                            <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                                {plan.bestValue && (
                                    <div
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                                                    text-white text-xs font-bold uppercase tracking-wider
                                                                    px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                                    >
                                        Best Value
                                    </div>
                                )}
                                <h3 className="text-2xl font-semibold text-heading-1 mb-2">
                                    {plan.title}
                                </h3>
                                <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl">
                                    <img 
                                        src={plan.imgSrc} 
                                        alt={plan.title} 
                                        className="w-full h-full object-cover object-center" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
    )
}