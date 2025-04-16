import { Container } from "../shared/Container"
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
    return (
        <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 mb-4">
                        <img className="w-7 h-7" alt="Edge AI Logo" src="/assets/icon.svg"/>
                        <span className="text-lg font-semibold text-heading-1">EdgeAI</span>
                    </div>
                    <ul className="flex gap-6 text-heading-1">
                        {
                            navItems.map((item, key) => (
                                <NavItem key={key} href={item.href} text={item.text}/>
                            ))
                        } 
                    </ul>
                </div>
            </Container>
        </footer>
    )
}