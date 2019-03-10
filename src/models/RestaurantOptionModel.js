import cuid from 'cuid'

export default class RestaurantOptionModel {
    constructor(place) { 
        this.id = cuid();
        this.place = place;
        this.voters = [];
    }

    AddVote(vote) {
        this.voters.push(vote);
    }
}