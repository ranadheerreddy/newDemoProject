import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ResolverService } from 'src/app/resolver.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) {
    this.actRoute.data.pipe(map(data => data.cres)).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
    console.log('component initiated');
  }

}
