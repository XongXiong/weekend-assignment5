app.controller('ListingsController', ['$http', function ($http) {
    console.log('ListingsController created.');
    var self = this;

    self.listings = [];
    self.newListing = {};

    self.refreshListings = function(){
        $http.get('/listings').then(function(response){
            console.log('Success getting listings!');
            self.listings = response.data;
        }).catch(function(error){
            console.log('GET listings failed');
        })
    };

    self.refreshListings();

    self.addListing = function(newListing){
        console.log(newListing);
        $http.post('/listings', newListing).then(function (response) {
            console.log('New Listing Added');
            self.refreshListings();
        }).catch(function (error) {
            console.log('POST listings failed');
        })
        self.newListing = null;
    }
}]);