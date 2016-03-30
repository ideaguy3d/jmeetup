import {User} from "../models";
/**
 * Created by Julius Hernandez on 3/28/2016.
 */

/// <reference path="../_all.ts" />

module jMeetupApp {
    export class MainCtrl {
        static $inject = ['userService'];

        constructor(private userService: IUserService) {
            var self = this;
            this.userService
            .loadAllUsers()
            .then((users: User[]) => {
                self.users = users;
                console.log("self.users = "+self.users);
            })
        }

        users: User[] = [];
        jmessage: string = "jMeetupApp ^_^";
        jmessage2: string = "hey";
    }
}

