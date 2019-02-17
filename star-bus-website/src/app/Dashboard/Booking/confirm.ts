export class ConfirmBooking{
    constructor(public seats?: number,
        public email?: string,
        public busname?: number,
        public dateOfBooking?: string,
        public time?: string,
        public source?: string,
        public destination?: string,
        ) { }

}