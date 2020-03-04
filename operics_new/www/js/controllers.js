angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $rootScope, $stateParams, $http) {
      
    $rootScope.webServiceUrl = "http://www.microwebservice.net/operics_web/webservice.php" 

        /* var ServiceRequest = {
            service_type: "referanslar"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
       $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.referanslar= data
        })

       var ServiceRequest = {
            service_type: "sozluk"
        }
        // Yeni user isteği post edilir ve veritabanına eklenir.
       $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.sozluk= data[0]
        })
        */

    $scope.x = 0;

    $scope.tikla=function() {
        console.log($scope.x);
    }
   
    $scope.operics = [

    {

        tr: [{

            references: [
                { img: 'https://i4.hurimg.com/i/hurriyet/75/0x0/5cd01f8ec03c0e2e30c221b5.jpg', id: 0 },
                { img: 'https://i.pinimg.com/originals/00/82/79/0082797f78fadd08c5bd2926a450667f.png', id: 1 },
                { img: 'https://i.pinimg.com/originals/e9/b6/be/e9b6be54cbf873b14681a21dca530f22.png', id: 2 },
                { img: 'https://c-es.nl/wp-content/uploads/2019/07/2019-07-07-Microsoft-Logo.png', id: 3 },
                { img: 'https://www.aboomi.com/wp-content/uploads/enerjisa.png', id: 4 },
                { img: 'https://www.pendiklitv.com/wp-content/uploads/2018/08/%C4%B0SK%C4%B0-logo.jpg', id: 5 }
            ]
        }]
    ]};


    if ($stateParams.detayId) {
        $scope.bilgi = $scope.Operics[$stateParams.detayId];
    } 

});



