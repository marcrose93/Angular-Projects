
angular.module('myApp', [])
.directive('myTestDirective', function() {

    return {
        restrict: "E",
        replace: true,
        template: "<div id='parking_space'><p>{{pair.id}}<div id='parking_status'></div><div id='tip'></div></div>"
        
    }
})
.controller('myCtrl', function ($scope, $interval) {

    /*NAME THE CONTROLLERS PLEASE
    <script type="text/javascript">

    var app = angular.module('DemoApp',[]);

    app.controller('DemoController',function() {
        this.tutorialName = "Angular";

    });

     app.directive('ngGuru99',function(){
        return {
         controller: 'DemoController',

          controllerAs: 'ctrl',

          template: '{{ctrl.tutorialName}}'
     };
    });*/ 

    $scope.reserved_parking_spots = [];
    $scope.public_parking_spots = [];
    $scope.parking_status = [
        "occupied",
        "vacant"
    ]
   

    // $scope.reserved_parking_spots.forEach(function (z) {
    //     return z.p_status = $scope.parking_status[Math.floor(Math.random() * 2)];
    // })

    // for (let i = 1; i < 31; i++) {
    //     // $scope.reserved_parking_spots.push("#00" + i);
    //     $scope.reserved_parking_spots.id = "#00" + i;
        
    // }

    for (let i = 1; i < 31; i++) {
        $scope.reserved_parking_spots.push("#00" + i)
        
    }

    

    // $scope.reserved_parking_spots.forEach(function (h) {
    //    for (let i = 1; i < 31; i++) {
    //     h.id += "#00" + i;
    //     // h.p_status = $scope.parking_status[Math.floor(Math.random() * 2)];
        
    //    }

    //    return $scope.reserved_parking_spots
       
       

    // })

    for (let i = 31; i < 61; i++) {
        $scope.public_parking_spots.push("#00" + i);
    }

    // $scope.reserved_parking_spots.forEach(function (h) {
    //    $scope.paired = [$scope.reserved_parking_spots[h], $scope.parking_status[Math.floor(Math.random() * 2)]]
    // })
    

    

    $scope.time = new Date().toTimeString();

     

    $scope.titles = [
        "Company",
        "Pumps",
        "Showers",
        "Fuel",
        "Food"
    ]

    $scope.companies = [
        "Pilot",
        "Love's",
        "Flying J",
        "TA",
        "Petro"
    ]

    $scope.showersAvailableTA = [
            {
                "id": "01001XNFZ45",
                "status": ''

            },
            {
                "id": "01001XNFZ46",
                "status": ''
                
            },
            {
                "id": "01001XNFZ48",
                "status": ''
                
            },
            {
                "id": "01001XNFZ49",
                "status": ''
                
            },
            {
                "id": "01001XNFZ51",
                "status": ''
                
            },
            {
                "id": "01001XNFZ52",
                "status": ''
                
            },
            {
                "id": "01001XNFZ53",
                "status": ''
                
            },
            {
                "id": "01001XNFZ54",
                "status": ''
                
            }

        ];

    $scope.showersAvailablePetro = [
            {
                "id": "01001XNFZ23",
                "status": ''

            },
            {
                "id": "01001XNFZ24",
                "status": ''
                
            },
            {
                "id": "01001XNFZ25",
                "status": ''
                
            },
            {
                "id": "01001XNFZ26",
                "status": ''
                
            },
            {
                "id": "01001XNFZ34",
                "status": ''
                
            },
            {
                "id": "01001XNFZ54",
                "status": ''
                
            },
            {
                "id": "01001XNFZ19",
                "status": ''
                
            },
            {
                "id": "01001XNFZ098",
                "status": ''
                
            }

        ];

    $scope.info = [

        {
            company: 'loves',
            pumps : [
                
                {
                    id: 'ZQC001',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'ZQC002',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'ZQC003',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'ZQC004',
                    status: [
                        'open',
                        'closed'
                    ]
                },
            ],
            fuel : [
                {
                diesel : '4.68',
                gas : '2.89'
             }
            ],

            food : [ 
                {
                    name : 'McDonalds',
                    hours : 'M-F 5am-12am, Sat 6am-1am, Sun 6am-10pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'Sbarro',
                    hours : 'M-F 11am-9pm, Sat 10am-10pm, Sun 12pm-8pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'Dunkin Donuts',
                    hours : 'M-F 5am-10pm, Sat 6am-11pm, Sun 7am-9pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'IHOP',
                    hours : 'M-F 6am-9pm, Sat 8am-12am, Sun 9am-9pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'Panda Express',
                    hours : 'M-F 11am-10pm, Sat 11am-12am, Sun 12pm-9pm',
                    status: [
                        'open',
                        'closed'
                    ]
                }
            ]
        },

        {
            company: 'ta',
            pumps : [
                
                {
                    id: 'AQC001',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'AQC002',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'AQC003',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'AQC004',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'AQC005',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'AQC006',
                    status: [
                        'open',
                        'closed'
                    ]
                }
            ],
            fuel : {
                diesel : 'price',
                gas : 'price'
            },

            food : [
                {
                    name : 'McDonalds',
                    hours : 'M-F 6am-12am, Sat 6am-1am, Sun 6am-10pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'Subway',
                    hours : 'M-F 8am-9pm, Sat 9am-10pm, Sun 10am-9pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'Bojangles',
                    hours : 'M-F 7am-10pm, Sat 8am-10:30pm, Sun 6am-9pm',
                    status: [
                        'open',
                        'closed'
                    ]
            }
            ]
        },

        {
            company: 'petro',
            pumps : [
                
                {
                    id: 'XQC001',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC002',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC003',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC004',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC005',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC006',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC011',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC012',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    id: 'XQC015',
                    status: [
                        'open',
                        'closed'
                    ]
                }
            ],
            fuel : {
                diesel : 'price',
                gas : 'price'
            },

            food : [
                {
                    name : 'Starbucks',
                    hours : 'M-F 6am-12am, Sat 6am-1am, Sun 6am-10pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'Sbarro',
                    hours : 'M-F 8am-9pm, Sat 9am-10pm, Sun 10am-9pm',
                    status: [
                        'open',
                        'closed'
                    ]
                },
                {
                    name : 'Iron Skillet',
                    hours : 'M-F 7am-10pm, Sat 8am-10:30pm, Sun 6am-9pm',
                    status: [
                        'open',
                        'closed'
                    ]
                }
            ]
        }
    ]

    $interval(function () {

        $scope.showersAvailableLoves = [
            {
                id: "01001XNFZ01",
                status: '',
                label: "#001"

            },
            {
                id: "01001XNFZ02",
                status: '',
                label: "#002"
                
            },
            {
                id: "01001XNFZ03",
                status: '',
                label: "#004"
                
            },
            {
                id: "01001XNFZ04",
                status: '',
                label: "#005"
                
            },
            {
                id: "01001XNFZ04",
                status: '',
                label: "#006"
                
            },
            {
                id: "01001XNFZ07",
                status: '',
                label: "#007"
                
            },
            {
                id: "01001XNFZ08",
                status: '',
                label: "#008"
                
            },
            {
                id: "01001XNFZ09",
                status: '',
                label: "#009"
                
            }
        ];

        $scope.showersAvailableTA = [
            {
                id: "CC508API01",
                status: '',
                label: "#001"
        
            },
            {
                id: "CC508API02",
                status: '',
                label: "#002"
        
            },
            {
                id: "CC508API03",
                status: '',
                label: "#003"
        
            },
            {
                id: "CC508API04",
                status: '',
                label: "#004"
        
            },
            {
                id: "CC508API05",
                status: '',
                label: "#005"
        
            },{
                id:"CC508API06",
                status: '',
                label: "#006"
        
            },{
                id: "CC508API07",
                status: '',
                label: "#007"
        
            },
            {
                id:" CC508API08",
                status: '',
                label: "#008"
        
            },
            {
                id: "CC508API09",
                status: '',
                label: "#009"
        
            },
            {
                id: "CC508API10",
                status: '',
                label: "#010"
        
            },
            {
                id: "CC508API1",
                status: '',
                label: "#011"
        
            }
            
            
            

        ];

        $scope.showersAvailablePetro = [
        {
            id: "XQC045NXJ01",
            status: '',
            label: "#001"

        },
        {
            id: "XQC045NXJ02",
            status: '',
            label: "#002"

        },
        {
            id: "XQC045NXJ03",
            status: '',
            label: "#003"

        },
        {
            id: "XQC045NXJ04",
            status: '',
            label: "#004"

        },
        {
            id: "XQC045NXJ05",
            status: '',
            label: "#005"

        },{
            id: "XQC045NXJ06",
            status: '',
            label: "#006"

        },
        {
            id: "XQC045NXJ07",
            status: '',
            label: "#007"

        },
        {
            id: "XQC045NXJ08",
            status: '',
            label: "#008"

        },
        {
            id: "XQC045NXJ09",
            status: '',
            label: "#009"

        },
        {
            id: "XQC045NXJ10",
            status: '',
            label: "#010"

        },


        ];

        $scope.options = [
            'out of order',
            'vacant',
            'cleaning',
            'occupied'
        ];

    $scope.showersAvailableLoves.forEach(function (v) {
        return v.status= $scope.options[Math.floor(Math.random() * 4)];
    })
    $scope.showersAvailableTA.forEach(function (y) {
        return y.status= $scope.options[Math.floor(Math.random() * 4)];
    })
    $scope.showersAvailablePetro.forEach(function (z) {
        return z.status= $scope.options[Math.floor(Math.random() * 4)];
    })
    
        }, 4000)

    $scope.pairing = $interval(function () {
        $scope.paired = [];
        for (let i = 1; i < $scope.reserved_parking_spots.length; i++) {
            $scope.paired.push(
                {
                    id: "#00" + i,
                    p_status: $scope.parking_status[Math.floor(Math.random() * 2)]
                }
            )
            }
        $scope.vacant = 0;
        for (let t = 0; t < $scope.paired.length; t++)  {
                if ($scope.paired[t].p_status === "occupied") {
                    $scope.vacant++;
                }
                
            }
            return $scope.vacant;

        
        
    }, 2000)

    

})

    


  
//   $scope.checkShowerStatus = function () {



//       var options = [
//           'Occupied',
//           'Vacant',
//           'Out of Order',
//           'Cleaning'
//       ];

//       var random = Math.floor(Math.random() * 4);

//       // $scope.newStatus = [
//       //     'Occupied',
//       //     'Vacant',
//       //     'Out of Order'
//       // ]

//       // var random = Math.floor(Math.random() * 2);

//       // $scope.newStatus =  $scope.newStatus[random]

//       function renewCheck() {
//           $scope.newStatus = options[random];
//           return $scope.newStatus;
//       }

//       renewCheck();

//       // $scope.newStatus = '';
//       // $scope.vO = [
//       //     'vacant',
//       //     'occupied'

//       // ]
//       // var random = Math.floor(Math.random() * 2)
//       // $scope.newStatus = $scope.vO[random]

      
      
//       // // $scope.showersAvailableLoves.push(
//       // //     {
//       // //         "id": "sdfisldifsdf",
//       // //         "status": "vacant"
//       // //     }
//       // // )

//       // var stats = [
//       //     'Out of Order',
//       //     'Vacant',
//       //     'Occupied'
//       // ]

//       // var random = Math.floor(Math.random() * 3)

//       // $scope.newStatus = stats[random]


//       // for (let i = 0; i < $scope.showersAvailableLoves.length; i++) {

//       //     for (let x = 0; x < $scope.showersAvailableLoves[i].length; x++) {
//       //         $scope.showersAvailableLoves[i][x] = $scope.newStatus;
//       //     }
          





//       //     // $scope.showersAvailableLoves[i] += $scope.newStatus[random];
//       //     // return $scope.newStatus
//       // }

 
//   }


//   $interval(function () {

//     $scope.newStatus = [
//         'closed',
//         'open',
//         'cleaning',
//         'out of order'
//     ];

//     var random = Math.floor(Math.random() * 3)
//     return $scope.newStatus[random];
    
//   }, 4000)

  