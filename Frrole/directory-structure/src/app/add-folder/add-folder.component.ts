import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { DynamicFolderStructureService } from '../common/services/dynamic-folder-structure.service';

/**
 * @whatItDoes Adds a new folder
 *
 * @description Upon clicking Add, prompts the user to type a folder name.
 * Gives a default value of 'Untitled' to the folders.
 * Then calls add() method of Folder Service to create a new folder.
 */
@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.css']
})
export class AddFolderComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  showPrompt;

  constructor(private service: DynamicFolderStructureService) { }

  ngOnInit() {
  }

  add() {
    const newfolder = prompt('Please Enter a Folder Name', 'Untitled');
    this.service.create(newfolder);
  }
}
