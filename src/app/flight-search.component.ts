import { Flight } from './flight';
import { Component } from '@angular/core';
import { FlightService } from './flight-service';


@Component({
    selector: 'search-fl',
    templateUrl: './flight-search.component.html'

})

export class SearchFlightComponent {

    flights: Flight[];
    flight_from: string;
    flight_to: string;
    
    constructor(private fl: FlightService) {

    }

    ngOnInit() {

    }

    search(flight_from,flight_to) {

        let url = "http://localhost:8081/wanderer-flight-proj/SearchFlightServlet?from="+this.flight_from+"&to="+this.flight_to;
        this.fl.retrieveFromServer(url).subscribe(
            data => {
                console.log(data);
                this.flights=data;
            });
        

    }

}
