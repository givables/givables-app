import { useEffect, useState } from "react";


export default function useModal(wrapper, open: boolean) {

    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent) {
            if (wrapper.current && !wrapper.current.contains(event.target)) {
                // @ts-ignore
                setIsOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapper, isOpen, setIsOpen]);

    return {isOpen, setIsOpen};
}