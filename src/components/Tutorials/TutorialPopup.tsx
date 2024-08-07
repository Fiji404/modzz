import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

interface Props {
    heading: string;
    summary: string;
    content: { text: string; img: string }[];
    authors: string[];
    onClick(): void;
}

export const TutorialPopup = ({ content, heading, summary, authors, onClick }: Props) => {
    return (
        <>
            <motion.div
                className="custom-scroll fixed left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border border-[#383838] bg-black p-3"
                initial={{ width: '90%', height: '80vh', translateX: '-50%', translateY: '-50%', scale: 0.4, opacity: 0 }}
                animate={{ translateX: '-50%', translateY: '-50%', scale: 1, opacity: 1 }}
                exit={{ translateX: '-50%', translateY: '-50%', scale: 0.4, opacity: 0 }}
            >
                <div className="sticky top-0 flex justify-end">
                    <button
                        onClick={onClick}
                        className="rounded-md border border-[#202020] bg-[#131313] transition-colors hover:bg-[#1f1f1f]"
                    >
                        <IoClose className="text-5xl text-white" />
                    </button>
                </div>
                <h2 className="mb-6 text-center text-4xl font-bold text-[#b41111] underline">{heading}</h2>
                <ul className="flex flex-col items-center gap-10">
                    {content.map(({ text, img }) => (
                        <li className="flex flex-col items-center gap-2" key={text}>
                            <h2 className="text-2xl font-semibold text-white">{text}</h2>
                            <img className="max-w-[800px] rounded-md" src={img} />
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-center text-2xl font-medium text-white">{summary}</p>
                <div className="mt-2 flex justify-end gap-2">
                    {authors.map(author => (
                        <p className="w-fit select-none rounded-full border border-[#2c2c2c] bg-[#1a1a1a] px-4 py-1 text-xl font-medium text-white">
                            Autor: <span className="text-red-600">{author} ❤️</span>
                        </p>
                    ))}
                </div>
            </motion.div>
        </>
    );
};
