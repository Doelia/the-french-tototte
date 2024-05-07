import localFont from "next/font/local";

export const custavo = localFont({
    src: [
        {
            path: './gustavo_trial/Gustavo_trial-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './gustavo_trial/Gustavo_trial-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './gustavo_trial/Gustavo_trial-Bold.otf',
            weight: '700',
            style: 'bold',
        }
    ],
})

export const tartuffo = localFont({
    src: [
        {
            path: './tartuffo_trial/Tartuffo_Trial-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './tartuffo_trial/Tartuffo_Trial-Bold.otf',
            weight: '700',
            style: 'bold',
        }
    ],
})
