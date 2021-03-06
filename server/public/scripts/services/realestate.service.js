app.service('RealEstateService', function ($http) {
    console.log('RealEstateService loaded');
    var self = this;

    self.listings = { data: [] };
    self.rentals = { data: [] };
    self.featured = { data: [] };

    self.refreshData = function (category) {
        console.log(category.category);
        if (category.category === 'listings') {
            return $http.get('/listings').then(function (response) {
                console.log('Success getting listings!');
                self.listings.data = response.data;
            }).catch(function (error) {
                console.log('GET listings failed');
            });
        } else if (category.category === 'rentals') {
            return $http.get('/rentals').then(function (response) {
                console.log('Success getting rentals!');
                self.rentals.data = response.data;
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

    self.featuredItem = function (category) {
        if (category.category === 'listings') {
            $http.get('/listings/featured').then(function (response) {
                console.log('Success getting favorite');
                self.featured.data = response.data[0];
            }).catch(function (err) {
                console.log('Failed to get favorite');
            });
        } else if (category.category === 'rentals') {
            $http.get('/rentals/featured').then(function (response) {
                console.log('Success getting favorite');
                self.featured.data = response.data[0];
            }).catch(function (err) {
                console.log('Failed to get favorite');
            });
        };
    };
});