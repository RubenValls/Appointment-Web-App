import AppointmentDate from "../Class/appointmentDate.js";

const form = document.querySelector('#form').addEventListener('submit', createDate);

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1; //January is 0!
var year = today.getFullYear();
var hour = today.getHours();
var minutes = today.getMinutes();

if (day < 10) {
    day = '0' + dd;
}

if (month < 10) {
    month = '0' + month;
} 
    
today = year + '-' + month + '-' + day;
document.querySelector("#bDate").setAttribute("max", today);

var todayDateHour = new Date();
todayDateHour = year + '-' + month + '-' + day + "T" + hour + ":" + minutes;
document.querySelector("#apptDate").setAttribute("min", todayDateHour);

let aDate = document.querySelector('#apptDate')
let bDates = document.querySelector('#bDate')

aDate.addEventListener('input', () => {
    if(aDate.value < todayDateHour){
        document.querySelector('#submitButton').disabled = true;
    }else{
        document.querySelector('#submitButton').disabled = false;
    }
})

bDates.addEventListener('input', () => {
    if(bDates.value > todayDateHour){
        document.querySelector('#submitButton').disabled = true;
    }else{
        document.querySelector('#submitButton').disabled = false;
    }
})

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