import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode;
}
export const Heading = ({ children }: Props) => {
    return (
        <motion.h1
            initial={{ translateY: '-40px' }}
            animate={{ translateY: '0' }}
            className="text-center text-5xl font-bold text-[#e6e6e6]"
        >
            {children}
        </motion.h1>
    );
};
