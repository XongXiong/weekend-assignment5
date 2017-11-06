app.controller('ListingsController', function (RealEstateService) {
    console.log('ListingsController created.');
    var self = this;

    self.listings = RealEstateService.listings;
    self.newListing = {};
    self.showAdd = false;
    self.category = 'listings';
    self.featured = RealEstateService.featured;

    self.featuredItem = function (listings) {
        RealEstateService.featuredItem(listings);
        console.log(self.featured);
    };

    self.refreshListings = function (listings) {
        RealEstateService.refreshData(listings);
        self.featuredItem(listings);
        console.log(self.listings);
    };

    self.addListing = function (newListing, listings) {
        console.log(listings);
        if (newListing.city === undefined) {
            alert('Please enter a city.');
        } else if (newListing.sqft === undefined) {
            alert('Please enter square feet.');
        } else if (newListing.cost === undefined) {
            alert('Please enter a cost.');
        } else {
            RealEstateService.addData(newListing, listings);
            self.refreshListings(listings);
            self.newListing = null;
        };
    };

    self.showInput = function () {
        self.showAdd = !self.showAdd;
    };

    self.deleteItem = function (listingId, listings) {
        RealEstateService.deleteData(listingId, listings);
        self.refreshListings(listings);
    };
});