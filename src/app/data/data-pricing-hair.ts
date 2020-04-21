import { Pricing } from './models.pricing';

export const HairPricing: Pricing[] = [
    {
        'name': 'Haircuts',
        'desc': '',
        'rates': [
            {
                'label': 'Women',
                'price': '$45'
            },
            {
                'label': 'Men',
                'price': '$25'
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
            },
            {
                'label': 'Flat Iron',
                'price': '$15'
            },
            {
                'label': 'Special Up Do Style',
                'price': '$65'
            },
            {
                'label': 'Bridal',
                'price': 'Consult'
            }
        ]
    },
    {
        'name': 'Hair Color',
        'desc': '',
        'rates': [
            {
                'label': 'Color Root Retouch',
                'price': '$85'
            },
            {
                'label': 'Whole Head Color',
                'price': '+ $20'
            },
            {
                'label': 'Color Refresher',
                'price': '+ $30'
            },
            {
                'label': 'Foils',
                'price': '$125'
            },
            {
                'label': 'Color Correction',
                'price': 'Consult'
            }
        ]
    },
    {
        'name': 'Hair Texturing',
        'desc': '',
        'rates': [
            {
                'label': 'Permanent Waving',
                'price': '$95'
            }
        ]
    },
    {
        'name': 'Make Up Application',
        'desc': '',
        'rates': [
            {
                'label': 'Special Occassion',
                'price': '$50'
            },
            {
                'label': 'Make Up Lesson',
                'price': '$30'
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
