# Directory Structure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8 and Bootstrap version 4. 

## Project Repository
The Code Base is hosted on GitHub and can be found [here](https://github.com/arsh13/FrroleAssignment).
## Development Server

Please run `npm install` in the project root directory. Thereafter, run `ng serve` to start the dev server. Navigate to `http://localhost:4200/` to run the web app.

## Code Structure

The entry point for the web app is `app-component` which holds the `current-structure` component along with the Present Working Directory logic.
All the CRUD operations of the Folder Directory are managed in the service called `DynamicFolderStructureService`.
The `current-structure` is a dynamic component which displays the sub folders of the current directory. If there are no sub folders present, it shows an appropriate message and an option to add new folders to the current directory.
The `add-folder` and `delete-folder` components are populated besides each folder name giving an option to *create* a folder in the current working directory or *delete* that particular folder.

## Others
All details pertaining to a particular class and it's member functions are provided in the Docstrings and Code Comments. 
