import { Component, OnInit } from '@angular/core';
import { IndicationService } from '../../service/indication.service';
import { Indication } from '../../class/indication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indication',
  templateUrl: './indication.component.html',
  styleUrls: ['./indication.component.scss']
})
export class IndicationComponent implements OnInit {

  indications: Indication[];

  constructor(private indServ: IndicationService,
              private router: Router) { }

  ngOnInit() {
    this.indServ.getIndications()
        .subscribe((data: Indication[]) => {
          this.indications = data;
        });
  }

}
