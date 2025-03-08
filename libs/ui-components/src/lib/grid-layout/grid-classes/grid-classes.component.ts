import { Component, Input } from '@angular/core';

interface CssClass {
  className: string;
  property: string;
}

@Component({
  selector: 'b2b-grid-classes',
  templateUrl: './grid-classes.component.html',
  styleUrls: ['./grid-classes.component.scss']
})
export class B2bGridClassesDocsComponent {
  @Input() classesType: 'intro' | 'utilities' | 'column' | 'row' = 'intro';

  breakpoints = [
    { label: 'xs', value: '360px' },
    { label: 'sm', value: '480px' },
    { label: 'md', value: '768px' },
    { label: 'lg', value: '960px' },
    { label: 'xl', value: '1024px' },
    { label: '2xl', value: '1280px' },
    { label: '3xl', value: '1366px'},
    { label: '4xl', value: '1440px' },
  ];

  gaps = [
    { label: 'none', value: '0' },
    { label: 'xs', value: '0.25rem' },
    { label: 's', value: '0.5rem' },
    { label: 'unit', value: '1rem' },
    { label: 'm', value: '1.5rem' },
    { label: 'l', value: '2rem' },
    { label: 'xl', value: '2.5rem' },
    { label: 'xxl', value: '3rem' },
    { label: '3xl', value: '3.5rem' },
    { label: '4xl', value: '4rem' },
  ]

  cssUtilitiesClasses: CssClass[] = [
    { className: 'b2b-grid-flow-row', property: 'grid-auto-flow: row;' },
    { className: 'b2b-grid-flow-column', property: 'grid-auto-flow: column;' },
    { className: 'b2b-grid-flow-dense', property: 'grid-auto-flow: dense;' },
    { className: 'b2b-grid-flow-row-dense', property: 'grid-auto-flow: row dense;' },
    { className: 'b2b-grid-flow-column-dense', property: 'grid-auto-flow: column dense;' },
    { className: 'b2b-gap-{gap}', property: 'gap: var(--b2b-space-{gap});' },
    { className: 'b2b-gap-x-{gap}', property: 'column-gap: var(--b2b-space-{gap});' },
    { className: 'b2b-gap-y-{gap}', property: 'row-gap: var(--b2b-space-{gap});' },
  ];

  cssColumnClasses: CssClass[] = [
    { className: 'b2b-grid-cols-none', property: 'grid-template-columns: none;' },
    { className: 'b2b-grid-cols-subgrid', property: 'grid-template-columns: subgrid;' },
    { className: 'b2b-grid-cols-{number}', property: 'grid-template-columns: repeat({number}, minmax(0, 1fr));' },
    { className: 'b2b-auto-cols-auto', property: 'grid-auto-columns: auto;' },
    { className: 'b2b-auto-cols-min', property: 'grid-auto-columns: min-content;' },
    { className: 'b2b-auto-cols-max', property: 'grid-auto-columns: max-content;' },
    { className: 'b2b-auto-cols-fr', property: 'grid-auto-columns: minmax(0, 1fr);' },
    { className: 'b2b-col-auto', property: 'grid-column: auto;' },
    { className: 'b2b-col-span-full', property: 'grid-column: 1 / -1;' },
    { className: 'b2b-col-start-auto', property: 'grid-column-start: auto;' },
    { className: 'b2b-col-start-{number}', property: 'grid-column-start: {number};' },
    { className: 'b2b-col-end-auto', property: 'grid-column-end: auto;' },
    { className: 'b2b-col-end-{number}', property: 'grid-column-end: {number};' },
    { className: 'b2b-col-{number}', property: 'grid-column: auto / span {number};' },
  ];

  cssRowClasses: CssClass[] = [
    { className: 'b2b-grid-rows-none', property: 'grid-template-rows: none;' },
    { className: 'b2b-grid-rows-subgrid', property: 'grid-template-rows: subgrid;' },
    { className: 'b2b-grid-rows-{number}', property: 'grid-template-rows: repeat({number}, minmax(0, 1fr));' },
    { className: 'b2b-auto-rows-auto', property: 'grid-auto-rows: auto;' },
    { className: 'b2b-auto-rows-min', property: 'grid-auto-rows: min-content;' },
    { className: 'b2b-auto-rows-max', property: 'grid-auto-rows: max-content;' },
    { className: 'b2b-auto-rows-fr', property: 'grid-auto-rows: minmax(0, 1fr);' },
    { className: 'b2b-row-auto', property: 'grid-row: auto;' },
    { className: 'b2b-row-span-full', property: 'grid-row: 1 / -1;' },
    { className: 'b2b-row-start-auto', property: 'grid-row-start: auto;' },
    { className: 'b2b-row-start-{number}', property: 'grid-row-start: {number};' },
    { className: 'b2b-row-end-auto', property: 'grid-row-end: auto;' },
    { className: 'b2b-row-end-{number}', property: 'grid-row-end: {number};' },
    { className: 'b2b-row-{number}', property: 'grid-row: auto / span {number};' },
  ];

  get cssClasses(): CssClass[] {
    switch (this.classesType) {
      case 'utilities':
        return this.cssUtilitiesClasses;
      case 'column':
        return this.cssColumnClasses;
      case 'row':
        return this.cssRowClasses;
      default:
        return [];
    }
  }
}
