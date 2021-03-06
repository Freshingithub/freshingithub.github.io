/**
 * Created by Administrator on 2016/5/4 0004.
 */
angular.module('24EApp.zyzroutes',[])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider

            //设置状态
            .state('set-state',{
                url:'/set-state',
                cache:false,
                //params:{tag:null},
                views:{
                    '':{
                        templateUrl:'templates/Serve/set-state.html',
                        controller:'set-stateCtrl',
                    }
                }
                
            })
            //状态
            .state('State',{
                url:'/State',
                templateUrl:'templates/Serve/state.html',
                controller:'StateCtrl',
            })
            //我的订单
            .state('orderTabs.TaskNotice',{
                url:"/TaskNotice",
                cache:false,
                views:{
                    '':{
                        templateUrl:'templates/Serve/TaskNotice.html',
                        //controller:'TaskNoticeController'
                    }
                }
            })
            //余额提现
            .state('TakeCash',{
                url:'/TakeCash',
                cache:false,
                params:{money:null,account_yue:null},
                views:{
                    '':{
                        templateUrl:'templates/Serve/TakeCash.html',
                        controller:'TakeCashController'
                    }
                }
            })
            
            //接单
            .state('orderTabs.receiveOrder',{
                url:'/receiveOrder',
                reload:true,
                views:{
                    'orderTabs-receiveOrder':{
                        templateUrl:'templates/Serve/receiveOrder.html',
                        //controller: 'receiveOrderCtrl'
                    }
                }
            })
            //任务通知
            .state('orderTabs.receiveOrder.inform',{
                url:'/inform',
                //params:{state:null},
                views:{
                    'receiveOrder-inform':{
                        templateUrl:'templates/Serve/order_inform.html',
                        controller:'informCtrl',
                    }
                }
            })
            //地图定位
            .state('orderTabs.receiveOrder.map',{
                url:'/map',
                cache:false,
                views:{
                    'receiveOrder-map':{
                        templateUrl:'templates/Serve/order_map.html',
                        //controller:'mapCtrl',
                    }
                }
            })
            .state('schoolAddressMap', {
                url: "/schoolAddressMap",
                templateUrl: "templates/Serve/schoolAddressMap.html",
                controller: "mapCtrl",
                cache:false,
                params: {
                    'address': '',
                    'destination': '',
                    'start_lon':null,
                    'start_lat':null,
                    'location_point':null,
                }
            })

            //联系客户
            .state('orderTabs.receiveOrder.clients',{
                url:'/clients',
                cache:false,
                views:{
                    'receiveOrder-clients':{
                        templateUrl:'templates/Serve/order_clients.html',
                        controller:'clientsCtrl',
                    }
                }
            })
            //计时器
            .state('orderTabs.receiveOrder.timer',{
                url:'/timer',
                cache:false,
                views:{
                    'receiveOrder-timer':{
                        templateUrl:'templates/Serve/order_timer.html',
                        controller:'timerCtrl',
                    }
                }
            })

            //底部选项卡
            .state('orderTabs',{
                url:'/orderTabs',
                //abstract:true,
                templateUrl:'templates/Serve/order-tabs.html',
                
            })
            //公告信息
            .state('Notise',{
                url:'/Notise',
                templateUrl:'templates/Serve/Notise.html',
                controller:'notiseCtrl',
            })
            
    })