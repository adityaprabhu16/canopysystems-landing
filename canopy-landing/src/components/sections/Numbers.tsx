import { Container } from "../shared/Container";

export const Numbers = () => {
    return <section className="relative mt-12 md:mt-16">
        <Container className="flex justify-center align-center">
            <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center px-5">
                    <h2 className="font-semibold text-lg sm:text-xl md:text-3xl text-heading-1">🌱 No Experience Needed</h2>
                    <p className="mt-2 text-heading-3">Designed for non-technical users — just connect, configure, and start growing.</p>
                </div>
                <div className="text-center px-5">
                    <h2 className="font-semibold text-lg sm:text-xl md:text-3xl text-heading-1">🏡 Smart Home Integration: </h2>
                    <p className="mt-2 text-heading-3">Seamlessly integrates with your Home Assistant setup for full automation and remote monitoring.</p>
                </div>
                <div className="text-center px-5">
                    <h2 className="font-semibold text-lg sm:text-xl md:text-3xl text-heading-1">⏱️ Time-Saving Automation:</h2>
                    <p className="mt-2 text-heading-3">Automatically control lighting, watering, and nutrient cycles without daily intervention.</p>
                </div>
                <div className="text-center px-5">
                    <h2 className="font-semibold text-lg sm:text-xl md:text-3xl text-heading-1">🌿 Sustainable & Scalable: </h2>
                    <p className="mt-2 text-heading-3">Grow herbs, greens, or veggies right from your home with modular, upgradable components.</p>
                </div>
            </div>
        </Container>
    </section>
}