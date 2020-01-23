import { Component, OnInit, Input } from '@angular/core';
import { DynamicFolderStructureService } from '../common/services/dynamic-folder-structure.service';


/**
 * @whatItDoes Stores the template for the current folder structure.
 * Pushes the traversed folder onto the traversedDirectory array.
 */
@Component({
  selector: 'app-current-structure',
  templateUrl: './current-structure.component.html',
  styleUrls: ['./current-structure.component.css']
})
export class CurrentStructureComponent implements OnInit {
  currentFolder;

  constructor(private service: DynamicFolderStructureService) { }

  /**
   * Subscribes to the current visible structure Subject and assigns it to the member variable @param currentFolder
   */
  ngOnInit() {
    this.service.visibleStructure.subscribe(currentFolder => {
      this.currentFolder = currentFolder;
    });
  }

  /**
   * @param index Stores the index of the folder clicked to be viewed.
   * Pushes the traversed folder onto the traversedDirectory array.
   * And updates current visible structure with the contents of the current folder.
   */
  onClick(index) {
    this.service.traversedDirectory.push(this.currentFolder[index]);
    this.service.visibleStructure.next(this.service.data.get(this.currentFolder[index]));
  }

}
