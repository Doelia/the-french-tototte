import localFont from "next/font/local";

export const custavo = localFont({
    src: [
        {
            path: './gustavo/Gustavo-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './gustavo/Gustavo-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: './gustavo/Gustavo-Bold.woff',
            weight: '700',
            style: 'bold',
        }
    ],
})

export const tartuffo = localFont({
    src: [
        {
            path: './tartuffo/Tartuffo-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './tartuffo/Tartuffo-Bold.woff',
            weight: '700',
            style: 'bold',
        }
    ],
})
