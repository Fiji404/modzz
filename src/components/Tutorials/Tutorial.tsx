import { useState } from 'react';
import { TutorialPopup } from './TutorialPopup';
import { Backdrop } from '../UI/Backdrop';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
    heading: string;
    desc: string;
    content: { text: string; img: string }[];
    summary: string;
    authors: string[];
    i: number
}

export const Tutorial = ({ heading, desc, content, summary, authors, i }: Props) => {
    const [isTutorialOpen, setIsTutorialOpen] = useState(false);
    const clickTutorialHandler = () => {
        setIsTutorialOpen(true);
    };

    const closePopupHandler = () => {
        console.log('clicked');
        setIsTutorialOpen(() => false);
    };
    console.log(isTutorialOpen);
    return (
        <>
            <motion.li
                initial={{ translateY: '-20px', opacity: 0 }}
                animate={{ translateY: '0', opacity: 1 }}
                transition={{delay: i * 0.4}}
                onClick={clickTutorialHandler}
                className="max-w-[520px] cursor-pointer rounded-md border-[#ccc] bg-[#f3000c31] px-2 py-2 text-white hover:bg-[#f3000c62]"
            >
                <h2 className="text-center text-3xl font-bold text-[#bb0006]">{heading}</h2>
                <p className="text-center font-bold text-[#bb0006d7]">{desc}</p>
            </motion.li>
            <AnimatePresence>
                {isTutorialOpen && (
                    <>
                        <Backdrop onClick={closePopupHandler} />
                        <TutorialPopup
                            onClick={closePopupHandler}
                            summary={summary}
                            heading={heading}
                            authors={authors}
                            content={content}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
