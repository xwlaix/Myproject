
/**
 * Created by 21587 on 2016/12/21.
 */
var app=angular.module('myapp',['ionic']);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('tab',{
            url:'/tab',
            templateUrl:'templates/tabs.html'
        })
        .state('tab.home',{
            url:'/homepage',
            views:{
                'tab-home':{
                    templateUrl:'templates/homepage.html',
                }
            }
        })
        .state('tab.hots',{
            url:'/hots',
            views:{
                'tab-hots':{
                    templateUrl:'templates/hots.html'
                }
            }
        })
        .state('tab.article',{
            url:'/article',
            views:{
                'tab-article':{
                    templateUrl:'templates/article.html'
                }
            }
        })
        .state('tab.mine',{
            url:'/mine',
            views:{
                'tab-mine':{
                    templateUrl:'templates/mine.html'
                }
            }
        })

    $urlRouterProvider.otherwise('/tab/home');

})