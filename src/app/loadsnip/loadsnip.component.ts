
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { LoaderService } from '../service/loader.service';
const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';
@Component({
  selector: 'app-loadsnip',
  templateUrl: './loadsnip.component.html',
  styleUrls: ['./loadsnip.component.css']
})
export class LoadsnipComponent implements OnInit {
  nameCT: string
  @ViewChild('ngxLoading', { static: false }) NgxLoadingComponent: NgxLoadingComponent;
  @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  public primaryColour = PrimaryRed;
  public secondaryColour = SecondaryBlue;
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public config = { animationType: ngxLoadingAnimationTypes.none, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };

  constructor(private p:LoaderService) { 
    this.p.isLoading.subscribe((v) => {
    //  console.log(v);
      this.loading = v;
    });
  }

  ngOnInit() {
  }

}
