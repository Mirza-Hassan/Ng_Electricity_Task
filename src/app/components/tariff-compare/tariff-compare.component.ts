import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tariff-compare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff-compare.component.html',
  styleUrl: './tariff-compare.component.scss'
})
export class TariffCompareComponent {
  compareList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const storedCompareList = localStorage.getItem('compareList');
    if (storedCompareList) {
      this.compareList = JSON.parse(storedCompareList);
    }
  }

  removeFromCompare(tariff: any): void {
    const index = this.compareList.indexOf(tariff);
    if (index > -1) {
      this.compareList.splice(index, 1);
    }
    localStorage.setItem('compareList', JSON.stringify(this.compareList));
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
