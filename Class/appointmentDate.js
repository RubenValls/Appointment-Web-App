export default class AppointmentDate{
    constructor(nid, name, surname, apptDate, phone, bDate, observations){
        this.nid = nid,
        this.name = name,
        this.surname = surname,
        this.apptDate = apptDate,
        this.phone = phone,
        this.bDate = bDate;
        this.observations = observations
    }

    get getApptDate(){
        return this.apptDate;
    }

    get getNid(){
        return this.nid;
    }

    get getName(){
        return this.name;
    }

    get getSurname(){
        return this.surname;
    }

    get getPhone(){
        return this.phone;
    }

    get getbDate(){
        return this.bDate;
    }

    get getObservations(){
        return this.observations;
    }

    /**
     * @param {(arg0: any) => void} ApptDate
     */
    set setApptDate(ApptDate){
        this.apptDate = ApptDate;
    }

    /**
     * @param {(arg0: any) => void} nid
     */
    set setNid(nid){
        this.nid = nid;
    }

    /**
     * @param {(arg0: any) => void} name
     */
    set setName(name){
        this.name = name;
    }

    /**
     * @param {(arg0: any) => void} surname
     */
    set setSurname(surname){
        this.surname = surname;
    }

    /**
     * @param {(arg0: any) => void} phone
     */
    set setPhone(phone){
        this.phone = phone;
    }

    /**
     * @param {(arg0: any) => void} bDate
     */
    set setbDate(bDate){
        this.bDate = bDate;
    }

    /**
     * @param {(arg0: any) => void} observations
     */
    set setObservations(observations){
        this.observations = observations;
    }
}