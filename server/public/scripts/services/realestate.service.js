app.service('RealEstateService', function ($http) {
    console.log('RealEstateService loaded');
    var self = this;

    self.listings = { data: [] };
    self.rentals = { data: [] };

    self.refreshData = function (category) {
        console.log(category.category);
        if (category.category === 'listings') {
            $http.get('/listings').then(function (response) {
                console.log('Success getting listings!');
                self.listings.data = response.data;
                console.log(self.listings);
            }).catch(function (error) {
                console.log('GET listings failed');
            });
        } else if (category.category === 'rentals') {
            $http.get('/rentals').then(function (response) {
                console.log('Success getting rentals!');
                self.rentals.data = response.data;
                console.log(self.rentals);
            }).catch(function (error) {
                console.log('GET listings failed');
            });
        };
    };

    self.addData = function (newData, category) {
        if (category.category === 'listings') {
            $http.post('/listings', newData).then(function (response) {
                console.log('New Listing Added');
            }).catch(function (error) {
                console.log('POST listings failed');
            });
        } else if (category.category === 'rentals') {
            $http.post('/rentals', newData).then(function (response) {
                console.log('New Listing Added');
            }).catch(function (error) {
                console.log('POST listings failed');
            });
        };
    };

    self.deleteData = function (dataId, category) {
        if (confirm('Are you sure you want to delete this?')) {
            if (category.category === 'listings') {
                $http.delete('/listings/' + dataId).then(function (response) {
                    console.log('Item Deleted');
                    self.refreshData(category);
                }).catch(function (err) {
                    console.log('Failed to delete listing');
                });
            } else if (category.category === 'rentals') {
                $http.delete('/rentals/' + dataId).then(function (response) {
                    console.log('Item Deleted');
                    self.refreshData(category);
                }).catch(function (err) {
                    console.log('Failed to delete listing');
                });
            };
        };
    };
});