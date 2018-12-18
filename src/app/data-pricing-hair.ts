import { Pricing } from './pricing.models';

export const HairPricing: Pricing[] = [
    {
        'name': 'Haircuts',
        'desc': '',
        'rates': [
            {
                'label': 'Women',
                'price': '$38'
            },
            {
                'label': 'Men',
                'price': '$20'
            }
        ]
    },
    {
        'name': 'Styling',
        'desc': '',
        'rates': [
            {
                'label': 'Blowdry Styling',
                'price': '$30'
            },
            {
                'label': 'Blowdry Straightening',
                'price': '$35'
            }
        ]
    },
    {
        'name': 'Bridal Parties',
        // tslint:disable-next-line:max-line-length
        'desc': 'We are able to do estimates for hair make up services of the bride and bridal party. Please note this is just an estimate and pricing can change due to circumstances. Bridal parties serviced before or after regular business hours will be charged accordingly.',
        'rates': []
    }
];
