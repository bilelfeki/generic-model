import { isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';
import { ModelInterface } from './second-model.service';

@Injectable({
  providedIn: 'root'
})
export class FirstModelService implements ModelInterface {

  nameConfig = true;
  ageConfig = true;

  constructor() {}
  submitFromModel({}: {}) {
    return {}
  };


  getForm() {
    //call api service
    let callApi = {
      firstName: 'semi',
      age: 20,
      address:'sfax'
    };

    //handle change in the model
    callApi.age = callApi.age * 2;

    //map the backend model to the front end model with

    return {
      name: { value: callApi.address, hide: true },
      age: { value: callApi.age, hide: true },
      submit:{hide: true}
    };
    /*     return {
      ...callApi,
      name: {...callApi.firstName, hidable: this.nameConfig },
      age: {...callApi.age, hidable: this.ageConfig },
      submit:{hidable:true}
    }; */
  }

}
