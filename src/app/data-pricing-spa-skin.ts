import { Pricing } from './pricing.models';

export const SpaSkinPricing: Pricing = {
    'name': 'Skincare',
    // tslint:disable-next-line:max-line-length
    'desc': 'Each facial treatment includes an individualized analysis and the following skincare ritual: <ul> <li>Cleanse & Toning<\/li> <li>Exfoliation<\/li> <li>Warm Vaporizing Mist<\/li> <li>Extractions<\/li> <li>Relaxing Face, Neck and Shoulder Massage<\/li> <li>Specialized Mask<\/li> <li>Moisturizing Heated Hand Treatment<\/li> </ul>',
    'subtext': 'All skincare treatments reccomended in a series of 3 for the best results.',
    'items': [
        {
            'name': 'Classic European Facial',
            'desc': 'This deep cleansing facial helps to hydrate and purify skin.',
            'rates': [
                {
                    'label': 'Starting at',
                    'price': '$75'
                }
            ]
        }
    ]
};
