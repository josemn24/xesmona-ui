export interface Typography {
    name: string;
    cssClass: string;
    fontSize: string;
    lineHeight: string;
    weight?: 'regular' | 'medium' | 'bold';
}

export const titleTypographies: Typography[] = [
    {
        name: 'Titles/Size 01',
        cssClass: '.b2b-titles-size-01',
        fontSize: '--b2b-titles-01-font-size',
        lineHeight : '--b2b-titles-01-line-height'
    },
    {
        name: 'Titles/Size 02',
        cssClass: '.b2b-titles-size-02',
        fontSize: '--b2b-titles-02-font-size',
        lineHeight : '--b2b-titles-02-line-height'
    },
    {
        name: 'Titles/Size 03',
        cssClass: '.b2b-titles-size-03',
        fontSize: '--b2b-titles-03-font-size',
        lineHeight : '--b2b-titles-03-line-height'
    },
    {
        name: 'Titles/Size 04',
        cssClass: '.b2b-titles-size-04',
        fontSize: '--b2b-titles-04-font-size',
        lineHeight : '--b2b-titles-04-line-height'
    },
    {
        name: 'Titles/Size 05',
        cssClass: '.b2b-titles-size-05',
        fontSize: '--b2b-titles-05-font-size',
        lineHeight : '--b2b-titles-05-line-height'
    },
    {
        name: 'Titles/Size 06',
        cssClass: '.b2b-titles-size-06',
        fontSize: '--b2b-titles-06-font-size',
        lineHeight : '--b2b-titles-06-line-height'
    },
    {
        name: 'Titles/Size 06 (Medium)',
        cssClass: '.b2b-titles-size-06',
        fontSize: '--b2b-titles-06-font-size',
        lineHeight : '--b2b-titles-06-line-height',
        weight: 'medium'
    },
    {
        name: 'Titles/Size 07',
        cssClass: '.b2b-titles-size-07',
        fontSize: '--b2b-titles-07-font-size',
        lineHeight : '--b2b-titles-07-line-height'
    },
    {
        name: 'Titles/Size 07 (Medium)',
        cssClass: '.b2b-titles-size-07',
        fontSize: '--b2b-titles-07-font-size',
        lineHeight : '--b2b-titles-07-line-height',
        weight: 'medium'
    },
    {
        name: 'Titles/Size 08',
        cssClass: '.b2b-titles-size-08',
        fontSize: '--b2b-titles-08-font-size',
        lineHeight : '--b2b-titles-08-line-height'
    },
    {
        name: 'Titles/Size 08 (Medium)',
        cssClass: '.b2b-titles-size-08',
        fontSize: '--b2b-titles-08-font-size',
        lineHeight : '--b2b-titles-08-line-height',
        weight: 'medium'
    },
    {
        name: 'Titles/Size 09',
        cssClass: '.b2b-titles-size-09',
        fontSize: '--b2b-titles-09-font-size',
        lineHeight : '--b2b-titles-09-line-height'
    },
    {
        name: 'Titles/Size 09 (Medium)',
        cssClass: '.b2b-titles-size-09',
        fontSize: '--b2b-titles-09-font-size',
        lineHeight : '--b2b-titles-09-line-height',
        weight: 'medium'
    },
    {
        name: 'Titles/Size 10',
        cssClass: '.b2b-titles-size-10',
        fontSize: '--b2b-titles-10-font-size',
        lineHeight : '--b2b-titles-10-line-height'
    },
    {
        name: 'Titles/Size 10 (Medium)',
        cssClass: '.b2b-titles-size-10',
        fontSize: '--b2b-titles-10-font-size',
        lineHeight : '--b2b-titles-10-line-height',
        weight: 'medium'
    }
];

export const captionTypographies: Typography[] = [
    {
        name: 'Text/Caption M',
        cssClass: '.b2b-text-caption-m',
        fontSize: '--b2b-text-caption-m-font-size',
        lineHeight : '--b2b-text-caption-m-line-height'
    },
    {
        name: 'Text/Caption S',
        cssClass: '.b2b-text-caption-s',
        fontSize: '--b2b-text-caption-s-font-size',
        lineHeight : '--b2b-text-caption-s-line-height'
    }
];

export const ctaTypographies: Typography[] = [
    {
        name: 'CTA',
        cssClass: '.b2b-cta',
        fontSize: '--b2b-cta-font-size',
        lineHeight : '--b2b-cta-line-height'
    }
];
