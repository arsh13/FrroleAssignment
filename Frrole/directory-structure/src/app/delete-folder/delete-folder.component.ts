import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { DynamicFolderStructureService } from '../common/services/dynamic-folder-structure.service';


/**
 * @whatItDoes Deletes an existing folder
 *
 * @description Fetches the id of the element to be deleted by using ViewChild.
 * And then calls delete() method of the Folder Service.
 */
@Component({
  selector: 'app-delete-folder',
  templateUrl: './delete-folder.component.html',
  styleUrls: ['./delete-folder.component.css']
})
export class DeleteFolderComponent implements OnInit {
  faMinusCircle = faMinusCircle;
  @Input() id;
  @ViewChild('deleteComponent', { static: true }) deleteComponent;

  constructor(private service: DynamicFolderStructureService) { }

  ngOnInit() {
  }

  delete() {
    this.service.delete(this.deleteComponent.nativeElement.id);
  }

}
