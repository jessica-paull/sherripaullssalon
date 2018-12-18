import { Pricing } from './models.pricing';

export const SpaMassagePricing: Pricing[] = [
    {
        'name': 'Swedish Massage',
        'desc': 'Pamper yourself with a Swedish massage to soothe tired muscles.',
        'rates': [
            {
                'label': '30 minutes',
                'price': '$45'
            },
            {
                'label': '60 minutes',
                'price': '$75'
            }
        ]
    },
    {
        'name': 'Deep Tissue Massage',
        // tslint:disable-next-line:max-line-length
        'desc': 'Massage techniques that focus on the deeper layers of muscle tissue. It aims to release the chronic patterns of tension in the body through slower strokes and more direct deep pressure.',
        'rates': [
            {
                'label': '30 minutes',
                'price': '$55'
            },
            {
                'label': '60 minutes',
                'price': '$85'
            }
        ]
    },
    {
        'name': 'Speciality Massages',
        'desc': 'Book in advance',
        'rates': [
            {
                'label': 'Reiki',
                'price': ''
            },
            {
                'label': 'Hot Stone',
                'price': ''
            },
            {
                'label': 'Thai Yoga',
                'price': ''
            },
            {
                'label': 'Aromatherapy',
                'price': ''
            }
        ]
    }
];
