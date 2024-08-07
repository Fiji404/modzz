import { Link } from 'react-router-dom';

interface Props {
    name: string;
    route: string;
}

export const NavItem = ({ route, name }: Props) => {
    return (
        <li className="relative text-xl font-semibold text-[#b90104d3] transition-colors before:absolute before:bottom-0 before:left-1/2 before:h-0.5 before:w-full before:origin-left before:-translate-x-1/2 before:scale-x-0 before:bg-[#b90104d3] before:transition-transform before:content-[''] hover:text-[#b90104] hover:before:scale-x-100">
            <Link to={route}>{name}</Link>
        </li>
    );
};
