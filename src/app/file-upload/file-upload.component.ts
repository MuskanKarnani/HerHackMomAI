import { HttpClient } from '@angular/common/http';
import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  file: File | null = null; // Variable to store file
  fileContent: any = null;
  spinnerFlag: boolean = false;
  progress: boolean = false;
  fileName!: string;
  returnedData ="";
  items = [];
  emails = '';
  constructor(private router: Router, 
    // private http: HttpClient
    ) {}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {     
      // Implement the file upload logic here
      this.fileName = file.name;
      console.log('Selected file:', file);
      this.spinnerFlag=true;
    }
    console.log(this.spinnerFlag)
    this.importFile();
  }
  importFile()
  {
    this.progress=true;
    this.returnedData = "Data Received from API";
    console.log(this.returnedData)
  }

  
  resetAll()
  {
    this.returnedData = "";
    this.fileName="";
    this.spinnerFlag=false;
    this.progress=false;
  }
  words: string[] = [];
  newWord: string = '';

  addWord(): void {
    if (this.newWord) {
      this.words.push(this.newWord);
      this.newWord = '';
    }
  }

  selectChip(index: number): void {
    // Handle chip selection as needed
    console.log(`Selected chip: ${this.words[index]}`);
  }

  removeWord(word: string): void {
    const index = this.words.indexOf(word);
    if (index >= 0) {
      this.words.splice(index, 1);
    }
  }
  // public sendEmail() {
  //   console.log('===>', this.items);
  //   this.http
  //     .post(
  //       `http://apprunner.hk.hsbc/email-service/api/v1/send-email`,
  //       { to: this.items, subject: 'Mom', body: this.fileContent },
  //       { headers: { 'Content-Type': 'application/json' } }
  //     )
  //     .subscribe(
  //       (data) => {
  //         console.log('Response from api:', data);
  //       },
  //       (error) => {
  //         console.log('error:', error);
  //       }
  //     );
  // }

  // public sendonConfluence() {
  //   console.log('===>', this.items);
  //   this.http
  //     .post(
  //       ``,
  //      {},
  //       { }
  //     )
  //     .subscribe(
  //       (data) => {
  //         console.log('Response from api:', data);
  //       },
  //       (error) => {
  //         console.log('error:', error);
  //       }
  //     );
  // }
}
