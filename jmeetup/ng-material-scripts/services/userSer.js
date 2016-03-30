"use strict";

angular.module('jmeetup')
    .factory('userSer', [function () {
        return {
            loadAllUsers: function () {
                //implelment a $q to simulate a server response
            },
            selectedUser: null,
            users: [
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
            ]
        }
    }]);
