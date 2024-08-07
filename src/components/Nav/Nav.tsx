import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';
import { motion } from 'framer-motion';
export const Nav = () => {
    return (
        <>
            <motion.nav className="sticky top-0 z-10 border-b border-[rgb(51,51,51)] bg-[#000000c4] py-3 backdrop-blur-sm px-2">
                <div className="mx-auto flex max-w-[1600px] items-center justify-between ">
                    <Link to="/">
                        <img className="logo" src="/logo2.png" alt="modzz logo" />
                    </Link>
                    <ul>
                        <NavItem name="Pomoc" route="/tutorials" />
                    </ul>
                </div>
            </motion.nav>
        </>
    );
};
