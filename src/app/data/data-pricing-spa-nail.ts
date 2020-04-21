import { Pricing } from './models.pricing';

export const SpaNailPricing: Pricing[] = [
    {
        'name': 'Nail Service',
        'desc': '',
        'rates': [
            {
                'label': 'Manicure w/ Hand Massage',
                'price': '$20'
            },
            {
                'label': 'Pedicure',
                'price': '$30'
            },
            {
                'label': 'Shellac Polish',
                'price': '$25'
            },
            {
                'label': 'Shellac Removal',
                'price': '$10'
            },
            {
                'label': 'Paraffin',
                'price': '$15'
            }
        ]
    },
    {
        'name': 'Spa Manicure',
        'desc': 'With exfoliating and invigorating oils it leaves your hands feeling smooth, refreshed, and pampered.',
        'rates': [
            {
                'label': 'Spa Manicure',
                'price': '$30'
            },
            {
                'label': 'Deep Conditioning w/ Heated Mitts',
                'price': '$15'
            }
        ]
    }
];
