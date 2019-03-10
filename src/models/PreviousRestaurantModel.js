import RestaurantOptionModel from './RestaurantOptionModel'

export default class PreviousRestaurantModel extends RestaurantOptionModel { 
    constructor(place, date) {
        super(place);

        this.date = date;
    }
}