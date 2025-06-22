import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { TableDataService } from '../table-data.service';
import { of } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let tableDataService: jasmine.SpyObj<TableDataService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('TableDataService', ['getData']);

    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      imports: [ MatTableModule ],
      providers: [
        { provide: TableDataService, useValue: spy }
      ]
    }).compileComponents();

    tableDataService = TestBed.inject(TableDataService) as jasmine.SpyObj<TableDataService>;
    tableDataService.getData.and.returnValue(of([
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
    ]));

    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have dataSource with data', () => {
    expect(component.dataSource.length).toBe(1);
  });
});
