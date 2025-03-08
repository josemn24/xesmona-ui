export interface TypographyProperty {
    name: string;
    cssVariables: string;
    value: string;
}

export const typoFontFamily: TypographyProperty[] = [
    {
        name: 'DM Sans',
        cssVariables: '--b2b-font-family',
        value : '(font from Google Fonts)'
    }
];

export const typoFontWeight: TypographyProperty[] = [
    {
        name: 'Regular',
        cssVariables: '--b2b-font-weight-regular',
        value : '400'
    },
    {
        name: 'Medium',
        cssVariables: '--b2b-font-weight-medium',
        value : '500'
    },
    {
        name: 'Bold',
        cssVariables: '--b2b-font-weight-bold',
        value : '700'
    }
];

export const typoFontSizes: TypographyProperty[] = [
    {
        name: 'Titles/Size 01',
        cssVariables: '--b2b-titles-01-font-size',
        value : '4.5rem'
    },
    {
        name: 'Titles/Size 02',
        cssVariables: '--b2b-titles-02-font-size',
        value : '4rem'
    },
    {
        name: 'Titles/Size 03',
        cssVariables: '--b2b-titles-03-font-size',
        value : '3.5rem'
    },
    {
        name: 'Titles/Size 04',
        cssVariables: '--b2b-titles-04-font-size',
        value : '2.5rem'
    },
    {
        name: 'Titles/Size 05',
        cssVariables: '--b2b-titles-05-font-size',
        value : '2.25rem'
    },
    {
        name: 'Titles/Size 06',
        cssVariables: '--b2b-titles-06-font-size',
        value : '2rem'
    },
    {
        name: 'Titles/Size 07',
        cssVariables: '--b2b-titles-07-font-size',
        value : '1.75rem'
    },
    {
        name: 'Titles/Size 08',
        cssVariables: '--b2b-titles-08-font-size',
        value : '1.5rem'
    },
    {
        name: 'Titles/Size 09',
        cssVariables: '--b2b-titles-09-font-size',
        value : '1.25rem'
    },
    {
        name: 'Titles/Size 10',
        cssVariables: '--b2b-titles-10-font-size',
        value : '1rem'
    },
    {
        name: 'Text/Caption M',
        cssVariables: '--b2b-text-caption-m-font-size',
        value : '0.875rem'
    },
    {
        name: 'Text/Caption S',
        cssVariables: '--b2b-text-caption-s-font-size',
        value : '0.75rem'
    },
    {
        name: 'CTA',
        cssVariables: '--b2b-cta-font-size',
        value : '1rem'
    }
];

export const typoLineHeights: TypographyProperty[] = [
    {
        name: 'Titles/Size 01',
        cssVariables: '--b2b-titles-01-line-height',
        value : '6rem'
    },
    {
        name: 'Titles/Size 02',
        cssVariables: '--b2b-titles-02-line-height',
        value : '4.5rem'
    },
    {
        name: 'Titles/Size 03',
        cssVariables: '--b2b-titles-03-line-height',
        value : '4.5rem'
    },
    {
        name: 'Titles/Size 04',
        cssVariables: '--b2b-titles-04-line-height',
        value : '4rem'
    },
    {
        name: 'Titles/Size 05',
        cssVariables: '--b2b-titles-05-line-height',
        value : '3rem'
    },
    {
        name: 'Titles/Size 06',
        cssVariables: '--b2b-titles-06-line-height',
        value : '2.5rem'
    },
    {
        name: 'Titles/Size 07',
        cssVariables: '--b2b-titles-07-line-height',
        value : '2.25rem'
    },
    {
        name: 'Titles/Size 08',
        cssVariables: '--b2b-titles-08-line-height',
        value : '2rem'
    },
    {
        name: 'Titles/Size 09',
        cssVariables: '--b2b-titles-09-line-height',
        value : '1.75rem'
    },
    {
        name: 'Titles/Size 10',
        cssVariables: '--b2b-titles-10-line-height',
        value : '100%'
    },
    {
        name: 'Text/Caption M',
        cssVariables: '--b2b-text-caption-m-line-height',
        value : '1.125rem'
    },
    {
        name: 'Text/Caption S',
        cssVariables: '--b2b-text-caption-s-line-height',
        value : '1rem'
    },
    {
        name: 'CTA',
        cssVariables: '--b2b-cta-line-height',
        value : '1.5rem'
    }
];
