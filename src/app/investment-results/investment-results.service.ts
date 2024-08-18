import { Injectable } from '@angular/core';

import { InvestmentResults } from './InvestmentResults';

@Injectable({
  providedIn: 'root',
})
export class InvestmentResultsService {
  private annualData: InvestmentResults[] = [];
  constructor() {}

  clearAnnualData() {
    while (this.annualData.length > 0) {
      this.annualData.pop();
    }
  }

  calculateInvestmentResults(
    initialInvestment: number,
    annualInvestment: number,
    duration: number,
    expectedReturn: number
  ) {
    this.clearAnnualData();

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }

  getAnnualData() {
    return this.annualData;
  }
}
