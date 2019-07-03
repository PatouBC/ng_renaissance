import { Component, OnInit } from '@angular/core';
import { Actu } from '../../class/actu';
import { ActuService } from '../../service/actu.service';


@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.scss']
})
export class ActuComponent implements OnInit {
    loading: boolean;
    actus: Actu[];

  constructor(private actuServ: ActuService) { }

  ngOnInit() {
      this.loading = true;
      setTimeout(() => {
          this.getActus();
      }, 2000);

  }

  getActus() {
      this.actuServ.getActus()
          .subscribe((data: Actu[]) => {
              this.loading = false;
              this.actus = data;
          });
  }
}
