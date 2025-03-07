import { Injectable, Optional, SkipSelf } from '@angular/core';

/**
 * To modify the labels and text displayed, create a new instance of B2bPaginationIntl and
 * include it in a custom provider
 */
@Injectable({providedIn: 'root'})
export class B2bPaginationIntl {
  /** A label for the page size selector. */
  resultsPerPageLabel = 'Results per page';

  /** A label for the page description. */
  pageLabel = 'Page';

  /** A label for the connector between the current page and the total. */
  pageLabelConnector = 'of';
}

export function B2B_PAGINATION_INTL_PROVIDER_FACTORY(parentIntl: B2bPaginationIntl) {
  return parentIntl || new B2bPaginationIntl();
}

export const B2B_PAGINATION_INTL_PROVIDER = {
  // If there is already an B2bPaginationIntl available, use that. Otherwise, provide a new one.
  provide: B2bPaginationIntl,
  deps: [[new Optional(), new SkipSelf(), B2bPaginationIntl]],
  useFactory: B2B_PAGINATION_INTL_PROVIDER_FACTORY,
};
