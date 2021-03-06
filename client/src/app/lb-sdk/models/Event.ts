/* tslint:disable */
import {
  Account,
  Address,
  Group,
  Category,
  Participant
} from '../index';

declare var Object: any;
export interface EventInterface {
  "name"?: string;
  "description"?: string;
  "ownerId"?: number;
  "addressId"?: number;
  "fromDateTime"?: Date;
  "toDateTime"?: Date;
  "nMaxPaticipants"?: number;
  "created"?: Date;
  "modified"?: Date;
  "id"?: number;
  owner?: Account;
  address?: Address;
  groups?: Group[];
  categories?: Category[];
  participants?: Participant[];
}

export class Event implements EventInterface {
  "name": string;
  "description": string;
  "ownerId": number;
  "addressId": number;
  "fromDateTime": Date;
  "toDateTime": Date;
  "nMaxPaticipants": number;
  "created": Date;
  "modified": Date;
  "id": number;
  owner: Account;
  address: Address;
  groups: Group[];
  categories: Category[];
  participants: Participant[];
  constructor(data?: EventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Event`.
   */
  public static getModelName() {
    return "Event";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Event for dynamic purposes.
  **/
  public static factory(data: EventInterface): Event{
    return new Event(data);
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
      name: 'Event',
      plural: 'events',
      path: 'events',
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
        "ownerId": {
          name: 'ownerId',
          type: 'number'
        },
        "addressId": {
          name: 'addressId',
          type: 'number'
        },
        "fromDateTime": {
          name: 'fromDateTime',
          type: 'Date'
        },
        "toDateTime": {
          name: 'toDateTime',
          type: 'Date'
        },
        "nMaxPaticipants": {
          name: 'nMaxPaticipants',
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
      },
      relations: {
        owner: {
          name: 'owner',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'ownerId',
          keyTo: 'id'
        },
        address: {
          name: 'address',
          type: 'Address',
          model: 'Address',
          relationType: 'belongsTo',
                  keyFrom: 'addressId',
          keyTo: 'id'
        },
        groups: {
          name: 'groups',
          type: 'Group[]',
          model: 'Group',
          relationType: 'hasMany',
          modelThrough: 'EventGroup',
          keyThrough: 'groupId',
          keyFrom: 'id',
          keyTo: 'eventId'
        },
        categories: {
          name: 'categories',
          type: 'Category[]',
          model: 'Category',
          relationType: 'hasMany',
          modelThrough: 'EventCategory',
          keyThrough: 'categoryId',
          keyFrom: 'id',
          keyTo: 'eventId'
        },
        participants: {
          name: 'participants',
          type: 'Participant[]',
          model: 'Participant',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'eventId'
        },
      }
    }
  }
}
