import { Pricing } from './pricing.models';

export const SpaNailPricing: Pricing = {
    'name': 'Nail Services',
    'desc': '',
    'subtext': '',
    'items': [
        {
            'name': '',
            'desc': '',
            'rates': [
                {
                    'label': 'Manicure w/ Hand Massage',
                    'price': '$20'
                },
                {
                    'label': 'Shellac Polish',
                    'price': '$15'
                },
                {
                    'label': 'Shellac Removal',
                    'price': '$10'
                },
                {
                    'label': 'Pedicure',
                    'price': '$30'
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
                },
                {
                    'label': 'Paraffin Treatment',
                    'price': '$15'
                }
            ]
        }
    ]
};
