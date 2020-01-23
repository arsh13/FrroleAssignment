import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DynamicFolderStructureService } from './common/services/dynamic-folder-structure.service';


/**
 * @whatItDoes Entry point of the web app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'directory-structure';
  faChevronRight = faChevronRight;
  message;
  alertType;

  constructor(private service: DynamicFolderStructureService) { }

  ngOnInit(): void {
    // Subscribe to content messages service to display on the top
    this.service.contentMessages.subscribe(message => {
      switch (message) {
        case 'itsroot': this.message = 'Creating folders in the Root Directory is not allowed';
          this.alertType = 'alert-danger';
          break;
        case 'exists': this.message = 'A folder with this name already exists';
          this.alertType = 'alert-warning';
          break;
        case 'cautionDeletingAllSubFolders': this.message = 'You have deleted this folder and all it`s containing sub folders.';
          this.alertType = 'alert-danger';
          break;
        case 'deleted': this.message = 'This folder has been successfully deleted.';
          this.alertType = 'alert-danger';
          break;
        case 'created': this.message = 'This folder has been successfully created.';
          this.alertType = 'alert-success';
          break;
      }
    });
  }

  /** @param index: The index of the parent folder user wants to go to.
   * @whatItDoes Removes the trailing elements fromt the array starting from index
   */
  onClick(index) {
    this.service.traversedDirectory.splice(index + 1);
    if (index === 0) {
      this.service.visibleStructure.next(this.service.data.get('Root'));
    }
    else {
      this.service.visibleStructure.next(this.service.data.get(this.service.traversedDirectory[index]));
    }
  }
}
