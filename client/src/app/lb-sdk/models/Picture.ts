/* tslint:disable */

declare var Object: any;
export interface PictureInterface {
  "name"?: string;
  "url"?: string;
  "type"?: string;
  "index"?: number;
  "groupId"?: number;
  "width"?: number;
  "height"?: number;
  "created"?: Date;
  "modified"?: Date;
  "id"?: number;
  "imageableId"?: number;
  "imageableType"?: string;
  imageable?: any;
}

export class Picture implements PictureInterface {
  "name": string;
  "url": string;
  "type": string;
  "index": number;
  "groupId": number;
  "width": number;
  "height": number;
  "created": Date;
  "modified": Date;
  "id": number;
  "imageableId": number;
  "imageableType": string;
  imageable: any;
  constructor(data?: PictureInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Picture`.
   */
  public static getModelName() {
    return "Picture";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Picture for dynamic purposes.
  **/
  public static factory(data: PictureInterface): Picture{
    return new Picture(data);
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
      name: 'Picture',
      plural: 'pictures',
      path: 'pictures',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "index": {
          name: 'index',
          type: 'number'
        },
        "groupId": {
          name: 'groupId',
          type: 'number'
        },
        "width": {
          name: 'width',
          type: 'number'
        },
        "height": {
          name: 'height',
          type: 'number'
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
        "imageableId": {
          name: 'imageableId',
          type: 'number'
        },
        "imageableType": {
          name: 'imageableType',
          type: 'string'
        },
      },
      relations: {
        imageable: {
          name: 'imageable',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'imageableId',
          keyTo: 'id'
        },
      }
    }
  }
}
