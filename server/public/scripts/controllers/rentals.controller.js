app.controller('RentalsController', function (RealEstateService) {
    console.log('RentalsController created.');
    var self = this;

    self.rentals = RealEstateService.rentals;
    self.newRental = {};
    self.showAdd = false;
    self.category = 'rentals';
    self.featured = RealEstateService.featured;

    self.featuredItem = function (rentals) {
        RealEstateService.featuredItem(rentals);
    };

    self.refreshRentals = function (rentals) {
        RealEstateService.refreshData(rentals);
        self.featuredItem(rentals);
    };

    self.addRental = function (newRental, rentals) {
        if (newRental.city === '') {
            alert('Please enter a city.');
        } else if (newRental.sqft === '') {
            alert('Please enter square feet.');
        } else if (newRental.cost === '') {
            alert('Please enter a rent amount.');
        } else {
            RealEstateService.addData(newRental, rentals)
            self.refreshRentals(rentals);
            self.newRental = null;
        };
    };

    self.showInput = function () {
        self.showAdd = !self.showAdd;
    };

    self.deleteItem = function (rentalId, rentals) {
        RealEstateService.deleteData(rentalId, rentals);
        self.refreshRentals(rentals);
    };
});