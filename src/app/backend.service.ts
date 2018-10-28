import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService{

  constructor() { }
  createDb(){
	
   let  contacts =  [
 	{  id:  1,  name:  'Contact 1', email: 'contact1@email.com' },
 	{  id:  2,  name:  'Contact 2', email: 'contact2@email.com' },
 	{  id:  3,  name:  'Contact 3', email: 'contact3@email.com' },
 	{  id:  4,  name:  'Contact 4', email: 'contact4@email.com' }
   ];

   return {contacts};
	
  }
}
