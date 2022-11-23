import AppointmentDate from "../Class/appointmentDate.js";

const form = document.querySelector('#form').addEventListener('submit', createDate);

function createDate(){
        let finalDate = new AppointmentDate()
        let aDate = document.querySelector('#apptDate').value
        let nids = document.querySelector('#nid').value
        let names = document.querySelector('#name').value
        let surnames = document.querySelector('#surname').value
        let phones = document.querySelector('#phone').value
        let bDates = document.querySelector('#bDate').value
        let observatories = document.querySelector('#observations').value
        
        finalDate.nid = nids
        finalDate.name = names
        finalDate.surname = surnames
        finalDate.apptDate = aDate
        finalDate.phone = phones
        finalDate.bDate = bDates
        finalDate.observations = observatories

        if(window.localStorage.getItem(finalDate.nid)){
            window.alert(`There is already an appointment created using NID: ${finalDate.nid}. We can't create another date.`)
        }else{
            window.localStorage.setItem(String(finalDate.nid), JSON.stringify(finalDate))
            window.alert(`Appointment created. Thanks ${finalDate.name} Check it at Appt. List`)
        }
}