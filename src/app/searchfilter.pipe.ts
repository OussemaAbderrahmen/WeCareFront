import { Pipe, PipeTransform } from '@angular/core';
import { Complaints } from './components/complaints/complaints.component';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Complaints: Complaints[], searchValue:string): Complaints[] {
    if(!Complaints || !searchValue)
    {
      return Complaints;
    }
    return Complaints.filter(complaint=> 
      complaint.complaintDescription.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }


}
