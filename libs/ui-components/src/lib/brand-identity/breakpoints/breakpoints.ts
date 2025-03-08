export interface Breakpoint {
    label: string;
    value: string;
}

export const breakpoints: Breakpoint[] = [
    { label: 'xs', value: '360px' },
    { label: 'sm', value: '480px' },
    { label: 'md', value: '768px' },
    { label: 'lg', value: '960px' },
    { label: 'xl', value: '1024px' },
    { label: '2xl', value: '1280px' },
    { label: '3xl', value: '1366px'},
    { label: '4xl', value: '1440px' },
  ];
