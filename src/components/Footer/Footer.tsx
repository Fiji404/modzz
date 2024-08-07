import { FaDiscord, FaTiktok, FaPaypal } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Footer = () => {
    return (
        <motion.footer
            initial={{ width: '60px', height: '60px', translateY: '300%', translateX: '-50%' }}
            animate={{ translateY: 0, width: 'auto', height: 'auto', translateX: '-50%' }}
            className="fixed bottom-4 left-1/2 z-30 block -translate-x-1/2 rounded-full border border-[rgb(22,22,22)] bg-[#000000] backdrop-blur-sm"
        >
            <ul className="hide flex justify-center gap-4">
                <a className="footer-link" target="_blank" href="https://www.tiktok.com/@xxsergiooplxx">
                    TikTok <FaTiktok className="text-white" />
                </a>
                <a className="footer-link" href="https://discord.gg/modzz" target="_blank">
                    Discord <FaDiscord className="text-[#5765F2]" />
                </a>
                <a className="footer-link" href="https://www.paypal.com/pl/home" target="_blank">
                    Donate <FaPaypal className="text-[#006CD9]" />
                </a>
            </ul>
        </motion.footer>
    );
};
