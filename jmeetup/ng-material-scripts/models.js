/**
 * Created by Julius Hernandez on 3/28/2016.
 */
"use strict";
/// <reference path="_all.ts" />
var User = (function () {
    function User(name, avatar, bio, notes) {
        this.name = name;
        this.avatar = avatar;
        this.bio = bio;
        this.notes = notes;
    }
    return User;
}());
exports.User = User;
var Note = (function () {
    function Note(title, date) {
        this.title = title;
        this.date = date;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=models.js.map