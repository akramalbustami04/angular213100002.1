import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css'],
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });

    this.getData();
  }

  ngOnInit(): void {}
  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=eacd4d48d3b64b11b0c95cc11d081557';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en-US', '', 'SGD');
      console.log('SGD : ' + sgd2);
      row = [2, 'SGD', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log('BND : ' + bnd2);
      row = [3, 'BND', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, 'en-US', '', 'HKD');
      console.log('HKD : ' + hkd2);
      row = [4, 'HKD', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC : ' + btc2);
      row = [5, 'BTC', btc2];
      this._table1.row.add(row);

      var rub = rates.IDR / rates.RUB;
      var rub2 = formatCurrency(rub, 'en-US', '', 'RUB');
      console.log('RUB : ' + rub2);
      row = [6, 'RUB', rub2];
      this._table1.row.add(row);

      var lkr = rates.IDR / rates.LKR;
      var lkr2 = formatCurrency(lkr, 'en-US', '', 'LKR');
      console.log('LKR : ' + lkr2);
      row = [7, 'LKR', lkr2];
      this._table1.row.add(row);

      var pkr = rates.IDR / rates.PKR;
      var pkr2 = formatCurrency(pkr, 'en-US', '', 'PKR');
      console.log('PKR : ' + pkr2);
      row = [8, 'pkr', pkr2];
      this._table1.row.add(row);

      var mxn = rates.IDR / rates.MXN;
      var mxn2 = formatCurrency(mxn, 'en-US', '', 'MXN');
      console.log('MXN : ' + mxn2);
      row = [9, 'MXN', mxn2];
      this._table1.row.add(row);

      var myr = rates.IDR / rates.MYR;
      var myr2 = formatCurrency(myr, 'en-US', '', 'myr');
      console.log('MYR : ' + myr);
      row = [10, 'MYR', myr2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
