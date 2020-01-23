import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * @whatItDoes Performs all the basic CRUD operations of the Directory App
 *
 * @howToUse Call the methods by creating an instance of the service. Example: service.add()
 *
 * @description
 * Stores a shared instance of current visible folder structure, traversed directory and content messages.
 * Along with all the CRUD operations
 */
@Injectable({
  providedIn: 'root'
})
export class DynamicFolderStructureService {
  data: Map<string, string[]> = new Map();
  visibleStructure = new BehaviorSubject<string[]>(null);
  contentMessages = new BehaviorSubject<string>(null);
  traversedDirectory = [];

  /* Gives the last element of the traversed array, basically parent of the current folder structure */
  get lastElement() {
    return this.traversedDirectory[this.traversedDirectory.length - 1];
  }

  constructor() {
    // Populate default values in the Map
    const currentSubFolders = ['First Folder', 'Second Folder', 'Third Folder'];
    this.data.set('Root', currentSubFolders);

    const currentSubFolders2 = ['Fourth Folder', 'Fifth Folder', 'Sixth Folder'];
    this.data.set('Third Folder', currentSubFolders2);

    // Set default traversed as Root
    this.traversedDirectory.push('Root');

    // Display contents of Root as default view
    this.visibleStructure.next(this.data.get('Root'));

  }

  /* Add the key (new folderName) to already existing sub folders of parent.
   *  Or create a new key value pair in map and set the
   *  key => parent folder name
   *  value => array of subfolders
   */
  create(key: string) {
    // Check if folder with the same name already exists
    if (this.data.has(key) || (this.data.get(this.lastElement) && this.data.get(this.lastElement).indexOf(key) !== -1)) {
      this.contentMessages.next('exists');
      return;
    }

    // Add sub folders in parent folder
    const tempArray = this.data.get(this.lastElement) || []; // get last element's array object
    tempArray.push(key);
    this.data.set(this.lastElement, tempArray);
    this.contentMessages.next('created');
    this.visibleStructure.next(this.data.get(this.lastElement));
  }

  /* Delete a folder element by key name. */
  delete(key: string) {
    // If folder has sub folders
    if (this.data.has(key)) {
      // Remove from first level
      this.data.delete(key);

      // Remove reference from Root
      this.data.set('Root',
        this.data.get(this.lastElement).filter(x => {
          return x !== key;
        }));

      this.contentMessages.next('cautionDeletingAllSubFolders');

    }
    // Else if folder does not have any sub folders
    else {
      this.data.set(this.lastElement,
        this.data.get(this.lastElement).filter(x => {
          return x !== key;
        }));
      this.contentMessages.next('deleted');
    }
    this.visibleStructure.next(this.data.get(this.lastElement));
  }
}
