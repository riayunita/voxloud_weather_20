import { Component, OnInit } from '@angular/core';
import { TableDataService, Element } from '../table-data.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule,MatTableModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: Element[] = [];

  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.tableDataService.getData().subscribe(data => {
      this.dataSource = data;
    });
  }
}
