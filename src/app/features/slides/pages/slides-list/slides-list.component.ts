import { SlideShowService } from './../../services/slides.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppMessageService } from 'src/app/core/helpers/app-message-service';
import { ResponseDto } from 'src/app/core/models/generic/response.dto';
import { SlideShowDto } from 'src/app/core/models/slides/slide-show.dto';
import Globals from 'src/app/core/helpers/globals';

@Component({
  selector: 'app-slides-list',
  templateUrl: './slides-list.component.html'
})
export class SlideShowListComponent implements OnInit {

  //#region Properties
  slides: SlideShowDto[];
  images: any[] = [];
  isDisplayGalleria: boolean = false;
  uploadedFiles: File[] = [];
  model: SlideShowDto;
  isDetail: boolean = false;
  //#endregion Properties

  //#region Properties
  constructor(
    private router: Router,
    private slideShowApi: SlideShowService,   
    private appMessageService: AppMessageService
  ) {
    this.slides = new Array<SlideShowDto>();
    this.model = new SlideShowDto();
  }
  //#endregion Properties

  //#region Lifecycle Hooks
  ngOnInit() {
    this.initSlides();
  }
  //#endregion Lifecycle Hooks

  //#region Utilities  
  //#endregion Utilities

  //#region Functions
  initSlides() {
    this.isDisplayGalleria = false;
    this.uploadedFiles = [];
    this.images = [];
    this.slideShowApi.Get(null).subscribe(res =>{
      console.log(res)
        res.SlideShows.forEach((element , index)=> {
            this.images.push({source:
                Globals.fileUploadBase + 
                              "/slides/" + 
                              element.Document.PhysicalName ,
                              width: '600px',
                              height: '413px',
                              alt:'', 
                              element: element,
                              title: element.Title});
        });
        if(res.SlideShows.length == 0) {
            this.images.push({source:'assets/layout/images/default.png', 
                           alt:'', title:''});
        }
       this.isDisplayGalleria = true;
       this.closeDialog();

    });
  }
  showDialog() {
    this.isDetail = true;
  }
  closeDialog() {
    this.isDetail = false;
  }
  onSave(uploadSlide) {
    this.slideShowApi.Create(uploadSlide.Model, uploadSlide.File).subscribe(
      res => {
          if ((res as ResponseDto).Exceptions.length) {
          this.appMessageService.showException(
           (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
          return;
        }
        this.initSlides();
      },
      err => {
        this.appMessageService.showException(err);
      }
    );
  }
  onRemoveImage(model: SlideShowDto) {
    this.slideShowApi.Remove(model).subscribe(
        res => {
          if ((res as ResponseDto).Exceptions.length) {
            this.appMessageService.showException(
              (res as ResponseDto).Exceptions[0].Title + "-" + (res as ResponseDto).Exceptions[0].Message)
            return;
          }
          this.appMessageService.showSuccess();
          this.initSlides();
        },
        error2 => {
        }
      );
  }
  //#endregion Functions

}
