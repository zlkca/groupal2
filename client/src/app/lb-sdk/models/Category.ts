/* tslint:disable */

declare var Object: any;
export interface CategoryInterface {
  "name"?: string;
  "description": string;
  "created"?: Date;
  "modified"?: Date;
  "id"?: number;
}

export class Category implements CategoryInterface {
  "name": string;
  "description": string;
  "created": Date;
  "modified": Date;
  "id": number;
  constructor(data?: CategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Category`.
   */
  public static getModelName() {
    return "Category";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Category for dynamic purposes.
  **/
  public static factory(data: CategoryInterface): Category{
    return new Category(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Category',
      plural: 'categories',
      path: 'categories',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
