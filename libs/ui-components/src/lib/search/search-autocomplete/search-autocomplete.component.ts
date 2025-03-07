import { Component, Input, OnChanges, Signal, SimpleChanges } from '@angular/core';
import { AutoCompleteService } from './services/autocomplete.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'b2b-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.scss'],
  standalone: true,
})
export class B2bSearchAutoCompleteComponent implements OnChanges {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() results: any[];
  showAutoComplete: Signal<boolean>;

  constructor(private autoCompleteService: AutoCompleteService) {
    this.showAutoComplete = this.autoCompleteService.autoCompleteExpanded;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['results']) {
      this.autoCompleteService.updateResults(this.results);
    }
  }
}
