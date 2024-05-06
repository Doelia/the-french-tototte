import {useEffect} from "react";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export function useTextAnimated(ref, value) {
    useEffect(() => {
        gsap.to(ref.current, {
            text: value,
        });
    }, [value])
}
