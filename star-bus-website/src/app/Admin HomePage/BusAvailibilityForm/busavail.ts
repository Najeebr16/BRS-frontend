export class BusAvail{
    constructor(
        private busname?: string,
        private source?: string,
        private destination?: string,
        private tfare?: DoubleRange,
        private day?: string,
        private time?: string,
        private type?: string,
        private timerange?: string,
        ) { }

}