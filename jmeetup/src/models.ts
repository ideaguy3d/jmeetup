/**
 * Created by Julius Hernandez on 3/28/2016.
 */

/// <reference path="_all.ts" />

export class User {
    constructor(public name:string,
                public avatar:string,
                public bio:string,
                public notes:Note[]) {
    }
}

export class Note {
    constructor(public title:string,
                public date:Date) {
    }
}