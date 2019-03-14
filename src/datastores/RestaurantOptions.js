import cuid from 'cuid';
import _ from 'lodash';  
import RestaurantOptionModel from '../models/RestaurantOptionModel';

var minervaOption = new RestaurantOptionModel('Minerva');
_.times(5, (_) => minervaOption.AddVote(cuid())); 

var bertsOption = new RestaurantOptionModel('Berts');
_.times(3, (_) => bertsOption.AddVote(cuid())); 

var atomOptions = new RestaurantOptionModel('Atom');
_.times(6, (_) => atomOptions.AddVote(cuid()));  

export const dataStore = [minervaOption, bertsOption, atomOptions];  