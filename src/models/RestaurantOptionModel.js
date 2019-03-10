import cuid from 'cuid'

export default class RestaurantOptionModel {
    constructor( name) {
        this.id = cuid();
        this.name = name;
        this.votes = [];
    }

    AddVote(vote) {
        this.votes.push(vote);
    }
}