import { AppMessageService } from './../helpers/app-message-service';
import { takeUntil, take } from 'rxjs/operators';

interface SearchModel {
    Id: number;
    Name: string;
}
export class BaseComponent {

    //#region Propertises
    isTrue: boolean = false;
    //#endregion Propertises 

    //#region Ctors
    
    //#endregion Ctors


    //#region Functions
    onKey(model){
      if (!model.replace(/\s/g, '').length) {
        this.isTrue = false;
      }else{
        this.isTrue = true;
      }
    }

    thousands(x: number): any {
      var str = x.toString().replace( /,/g, "" );
      
      var t = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");      
      return t;
    }

    //material select search
    filterArray(array, filteredArray, _destroy, FilterCtrl){

        filteredArray.next(array.slice());
        FilterCtrl.valueChanges
        .pipe(takeUntil(_destroy))
        .subscribe(() => {
          this.filter(array, filteredArray, FilterCtrl);
        });
        }
    
        private filter(array, filteredArray, FilterCtrl) {
          if (!array) {
            return;
          }
          let search = FilterCtrl.value;
          if (!search) {
            filteredArray.next(array.slice());
            return;
          } else {
            search = search.toLowerCase();
          }
          filteredArray.next(
            array.filter(x => x.Name.toLowerCase().indexOf(search) > -1)
          );
        }
        public setInitialValue(filteredArray, _destroy, singleSelect) {
            filteredArray
              .pipe(take(1), takeUntil(_destroy))
              .subscribe(() => {          
                // singleSelect.compareWith = (a: SearchModel, b: SearchModel) => a.Id === b.Id;
              });
          }
    //endregion Functions
}
