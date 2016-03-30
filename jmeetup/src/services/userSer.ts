import {User} from "../models";

/// <reference path="../_all.ts" />

module jMeetupApp {
    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService {
        static $inject = ['$q'];

        constructor (private $q: ng.IQService) {}

        selectedUser: User = null;

        loadAllUsers() : ng.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users: User[] = [
            {
                name: 'Julius Alvarado',
                avatar: 'svg-1',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                notes: [
                    {title: 'code code code', date: new Date('2016-01-24')},
                    {title: 'study study study', date: new Date('2016-01-22')}
                ]
            }
        ]
    }
}


