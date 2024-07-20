import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondModelService implements ModelInterface {
  nameConfig = true;
  ageConfig = true;
  constructor() {}

  submitFromModel({}: {}) {
    return {};
  }

  getForm() {
    //call api service
    let callApi = {
      firstName: 'semi',
      age: 20,
    };

    //handle change in the model
    callApi.age = callApi.age * 2;

    //map the backend model to the front end model with

    return {
      name: { value: callApi.firstName, hide: true },
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
export interface ModelInterface {
  getForm: () => {};
  submitFromModel: ({}) => {};
}
