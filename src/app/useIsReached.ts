import { useEffect, useState } from "react";

// window scroll position is greater than the top of the element
export function useIsReached(ref) {

    const [isReached, setReached] = useState(false);

    function onScroll() {
        const top = ref.current.getBoundingClientRect().top;
        setReached(top < 20);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [ref]);

    return isReached;
}
