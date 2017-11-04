app.controller('RentalsController', ['$http', function ($http) {
    console.log('RentalsController created.');
    var self = this;

    self.rentals = [];
    self.newRental

    self.refreshRentals = function () {
        $http.get('/rentals').then(function (response) {
            console.log('Success getting rentals!');
            self.rentals = response.data;
        }).catch(function (error) {
            console.log('GET rentals failed');
        })
    };

    self.refreshRentals();

    self.addRental = function(newRental){
        console.log(newRental);
        self.newRental = null;
    }
}]);