import { Component, OnInit } from '@angular/core';
import { TariffService } from '../../services/tariff.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tariff-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  tariffs: any[] = [];
  compareList: any[] = [];
  sortForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private tariffService: TariffService, private fb: FormBuilder, private router: Router) {
    this.sortForm = this.fb.group({
      sort: ['asc']
    });
  }

  ngOnInit(): void {
    this.tariffService.getTariffs().subscribe(data => {
      this.tariffs = data;
    });

    this.sortForm.get('sort')!.valueChanges.subscribe(value => {
      this.sortTariffs(value);
    });

    const storedCompareList = localStorage.getItem('compareList');
    if (storedCompareList) {
      this.compareList = JSON.parse(storedCompareList);
    }
  }

  sortTariffs(sortDirection: string): void {
    this.tariffs.sort((a, b) => sortDirection === 'asc' ? a.price - b.price : b.price - a.price);
  }

  addToCompare(tariff: any): void {
    if (this.compareList.length < 3 && !this.compareList.includes(tariff)) {
      this.compareList.push(tariff);
      localStorage.setItem('compareList', JSON.stringify(this.compareList));
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 1000);
    }
  }

  navigateToCompare(): void {
    this.router.navigate(['/compare']);
  }
}
