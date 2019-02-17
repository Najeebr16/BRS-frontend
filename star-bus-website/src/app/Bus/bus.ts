export class Bus{
    constructor(public bus_id? : number,
        public busname?: string,
        public source?: string,
        public destination?: string,
        public tfare?: number,
        public date?: string,
        public time?: string,
        public type?: string
        ) { }

}