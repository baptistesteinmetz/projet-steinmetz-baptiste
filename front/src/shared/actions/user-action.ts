import { User } from './../models/User';

export class AddUser {
  static readonly type = '[User] Add';
  constructor(public payload: User) {
  }
}
export class ConnectUser {
  static readonly type = '[User] Log';
  constructor(public payload: User) {}
}
export class ShowUser {
  static readonly type = '[User] Show';
  constructor(public payload: User) {}
}
export class DelUser {
  static readonly type = '[User] Del';
  constructor(public payload: User) {}
}
export class LogOffUser {
  static readonly type = '[User] LogOff';
  constructor(public payload: User) {}
}
