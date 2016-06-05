(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ngMessages', 'ngStorage', 'ngMockE2E', 'ui.bootstrap' ])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.view.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            
            .state('home.question1', {
                views: {
                    'math': {
                        url: '/question1',
                        templateUrl: 'questions/question1.view.html',
                        controller: 'HomeController', // cause it is on the home.view.html? Yes, I suppose
                        controllerAs: 'vm'
                    },
                    'background': {
                        url: '/background1',
                        templateUrl: 'background/background1.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                        
                    }
                }
            })
            .state('home.question2', {
                views: {
                    'math': {
                        url: '/question2',
                        templateUrl: 'questions/question2.view.html',
                        controller: 'HomeController', 
                        controllerAs: 'vm'
                    },
                    'background': {
                        url: '/background2',
                        templateUrl: 'background/background2.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                        
                    }
                }
            })
            .state('home.question3', {
                views: {
                    'math': {
                        url: '/question3',
                        templateUrl: 'questions/question3.view.html',
                        controller: 'HomeController', 
                        controllerAs: 'vm'
                    },
                    'background': {
                        url: '/background3',
                        templateUrl: 'background/background3.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                        
                    }
                }
            })
            .state('home.question4', {
                views: {
                    'math': {
                        url: '/question4',
                        templateUrl: 'questions/question4.view.html',
                        controller: 'HomeController', 
                        controllerAs: 'vm'
                    },
                    'background': {
                        url: '/background4',
                        templateUrl: 'background/background4.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                        
                    }
                }
            })
            .state('home.question5', {
                views: {
                    'math': {
                        url: '/question5',
                        templateUrl: 'questions/question5.view.html',
                        controller: 'HomeController', 
                        controllerAs: 'vm'
                    },
                    'background': {
                        url: '/background5',
                        templateUrl: 'background/background5.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                        
                    }
                }
            })
            .state('home.question6', {
                views: {
                    'math': {
                        url: '/question6',
                        templateUrl: 'questions/question6.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    },
                    'background': {
                        url: '/background6',
                        templateUrl: 'background/background6.view.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                        
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.view.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
             .state('register', {
                url: '/register',
                templateUrl: 'register/register.view.html',
                controller: 'RegisterController',
                controllerAs: 'vm'
            });
    }

    function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login', '/register'];//I added '/register' as in J. Watmore's user registration and login example
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });
    }
})();