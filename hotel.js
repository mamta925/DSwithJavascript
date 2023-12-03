class Hotel {
    constructor(hotelId, hotelName, starRating) {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.starRating = starRating;
    }
}

class HotelService {
    constructor() {
        this.hotels = {};
    }

    insertHotel(hotel) {
        if (this.hotels[hotel.hotelId]) {
            console.log("Hotel with this ID already exists:", hotel);
        } else {
            this.hotels[hotel.hotelId] = hotel;
            console.log("Inserted Hotel:", hotel);
        }
    }

    getHotelByHotelId(hotelId) {
        if (this.hotels[hotelId]) {
            return this.hotels[hotelId];
        } else {
            throw "No hotel found by this id: " + hotelId;
        }
    }

    getHotelsWithAtLeast(starRating) {
        let starRatingHotels = [];
        for (let key in this.hotels) {
            let hotel = this.hotels[key];
            if (hotel.starRating >= starRating) {
                starRatingHotels.push(hotel);
            }
        }
        return starRatingHotels;
    }

    updateHotel(updatedHotel) {
        if (this.hotels[updatedHotel.hotelId]) {
            this.hotels[updatedHotel.hotelId].hotelName = updatedHotel.hotelName || this.hotels[updatedHotel.hotelId].hotelName;
            this.hotels[updatedHotel.hotelId].starRating = updatedHotel.starRating || this.hotels[updatedHotel.hotelId].starRating;
            console.log("Updated Hotel:", this.hotels[updatedHotel.hotelId]);
        } else {
            throw "No hotel found by this id: " + updatedHotel.hotelId;
        }
    }
}

function main() {
    const hotelService = new HotelService();

    hotelService.insertHotel(new Hotel(1, "Hotel 1", 1));
    hotelService.insertHotel(new Hotel(2, "Hotel 2", 2));
    hotelService.insertHotel(new Hotel(3, "Hotel 3", 3));
    hotelService.insertHotel(new Hotel(4, "Hotel 4", 4));
    hotelService.insertHotel(new Hotel(5, "Hotel 5", 5));

    console.log(hotelService.getHotelsWithAtLeast(3));

    hotelService.updateHotel(new Hotel(4, "hotel 4", 1));
    console.log(hotelService.getHotelsWithAtLeast(3));
}

main();
