export interface SpacingToken {
  name: string;
  cssVariable: string;
  value: string;
  exampleClass: string;
}

export const spacingTokens: SpacingToken[] = [
  { name: 'Space/none', cssVariable: '--b2b-space-none', value: '0', exampleClass: 'example-none' },
  { name: 'Space/xs', cssVariable: '--b2b-space-xs', value: '0.25rem', exampleClass: 'example-xs' },
  { name: 'Space/s', cssVariable: '--b2b-space-s', value: '0.5rem', exampleClass: 'example-s' },
  { name: 'Space/unit', cssVariable: '--b2b-space-unit', value: '1rem', exampleClass: 'example-unit' },
  { name: 'Space/m', cssVariable: '--b2b-space-m', value: '1.5rem', exampleClass: 'example-m' },
  { name: 'Space/l', cssVariable: '--b2b-space-l', value: '2rem', exampleClass: 'example-l' },
  { name: 'Space/xl', cssVariable: '--b2b-space-xl', value: '2.5rem', exampleClass: 'example-xl' },
  { name: 'Space/xxl', cssVariable: '--b2b-space-xxl', value: '3rem', exampleClass: 'example-xxl' },
  { name: 'Space/3xl', cssVariable: '--b2b-space-3xl', value: '3.5rem', exampleClass: 'example-3xl' },
  { name: 'Space/4xl', cssVariable: '--b2b-space-4xl', value: '4rem', exampleClass: 'example-4xl' }
];
