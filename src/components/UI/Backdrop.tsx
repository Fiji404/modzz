interface Props {
    onClick(): void;
}

export const Backdrop = ({ onClick }: Props) => {
    return <div onClick={onClick} aria-hidden="true" className="fixed top-0 left-0 z-20 h-screen w-screen bg-[#000000ad]" />;
};
