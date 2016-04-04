"use strict";

angular.module('jmeetup')
    .factory('userSer', [function () {

        function CreateUserModel(firstname, lastname, avatar, bio) {
            this.firstname = firstname || 'no first name :(';
            this.lastname = lastname || 'no last name :(';
            this.avatar = avatar || 'julius-1';
            this.bio = bio || 'no bio :(';
        }

        function MyTempUserModel(name, avatar, bio, newNote) {
            this.name = name;
            this.avatar = avatar;
            this.bio = this.name + bio +' is Lorem ipsum dolor sit amet, consectetur ' +
                'adipisicing elit. Ad corporis est et eveniet hic illum, labore ' +
                'minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!';
            this.notes = [
                {title: 'code code code', date: new Date('2016-03-24')},
                {title: 'study study study', date: new Date('2016-03-22')}
            ];
            this.notes[2] = newNote;
        }

        //----------------- variable's -----------------
            // method will find an obj in an array of obj's given obj.name
        var findObNarray = function (nameprop) {
                for (var i = 0, len = users.length; i < len; i++) {
                    if (users[i].name === nameprop) return users[i];
                }
                return null;
            },

            // method to create a new CreateUserModel obj
            fromCreateUser = function (createdUser) {
                return new MyTempUserModel(
                    createdUser.firstName + ' ' + createdUser.lastName,
                    createdUser.avatar,
                    createdUser.bio,
                    { title: ' auto generated 3rd note ', date: new Date('2016-04-03') }
                );
            },

            // mock user data
            users = [
                {
                    name: 'Julius Alvarado',
                    avatar: 'julius-1',
                    bio: 'Julius Alvarado is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                    notes: [
                        {title: 'code code code', date: new Date('2016-01-24')},
                        {title: 'study study study', date: new Date('2016-01-22')}
                    ]
                },
                {
                    name: 'Julius Hernandez',
                    avatar: 'svg-2',
                    bio: 'Julius Hernandez is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                    notes: [
                        {title: 'hack hack hack', date: new Date('2016-01-24')},
                        {title: 'art art art', date: new Date('2016-01-22')}
                    ]
                },
                {
                    name: 'Inez Hernandez',
                    avatar: 'svg-2',
                    bio: 'Inez Hernandez is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                    notes: [
                        {title: 'hmm hmm hmm', date: new Date('2016-01-24')},
                        {title: 'ha ha ha', date: new Date('2016-01-22')}
                    ]
                },
                {
                    name: 'Martin Hernandez',
                    avatar: 'svg-3',
                    bio: 'Martin Hernandez is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                    notes: [
                        {title: 'hmm hmm hmm', date: new Date('2016-01-24')},
                        {title: 'ha ha ha', date: new Date('2016-01-22')}
                    ]
                }
            ],
            userCount = 0;

        //---------------------------------------------------------------------
        //---------------------------------------------------------------------
        // return this services' api obj
        return {
            loadAllUsers: function () {
                //implelment a $q to simulate a server response
            },
            selectedUser: null,
            users: users,
            addUser: function (foo) {
                var name = "User" + ++userCount + foo;
                var notes = {
                    title: 'note = ' + userCount + foo,
                    date: new Date('2016-04-03')
                };
                var userType = new MyTempUserModel(name, 'julius_1', notes);
                users.push(userType);
                //console.log(findObNarray(name).name+"User "+users[0]+" was added.");
            },
            addCreatedUser: function (createdUser) {
                users.push(fromCreateUser(createdUser));
            }
        }
    }]);
