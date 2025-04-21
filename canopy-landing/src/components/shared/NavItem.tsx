import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
    href: string;
    text: string;
}

export const NavItem = ({href, text}: NavItemProps) => {
    const location = useLocation();
    const isHashLink = href.startsWith('#');
    const isInternalLink = href.startsWith('/') || isHashLink;

    if(isInternalLink) {
        // If it's a hash link, determine the appropriate navigation
        if (isHashLink) {
            // If we're on the home page, use smooth scroll
            if (location.pathname === '/') {
                return (
                    <li>
                        <Link 
                            to={`/${href}`} 
                            className="duration-300 font-medium ease-linear hover:text-primary hover:text-blue-600 py-3"
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.querySelector(href);
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        > 
                            {text}
                        </Link>
                    </li>
                );
            }
            // If we're on a different page, navigate to home with hash
            else {
                return (
                    <li>
                        <Link 
                            to={`/${href}`} 
                            className="duration-300 font-medium ease-linear hover:text-primary hover:text-blue-600 py-3"
                        > 
                            {text}
                        </Link>
                    </li>
                );
            }
        }
        // For other internal links (like /community)
        return (
            <li>
                <Link 
                    to={href} 
                    className="duration-300 font-medium ease-linear hover:text-primary hover:text-blue-600 py-3"
                > 
                    {text}
                </Link>
            </li>
        );
    }

    // For external links
    return (
        <li>
            <a 
                href={href} 
                className="duration-300 font-medium ease-linear hover:text-primary hover:text-blue-600 py-3"
                target="_blank"
                rel="noopener noreferrer"
            > 
                {text}
            </a>
        </li>
    )
}