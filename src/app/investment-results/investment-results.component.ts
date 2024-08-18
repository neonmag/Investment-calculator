import { Component } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';

import { CurrencyPipe } from '@angular/common';

import { InvestmentResults } from './InvestmentResults';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentResults!: InvestmentResults[];

  constructor(private investmentResultsService: InvestmentResultsService) {
    this.investmentResults = this.investmentResultsService.getAnnualData();
  }

  getActualData() {
    this.investmentResults = this.investmentResultsService.getAnnualData();
  }
}
