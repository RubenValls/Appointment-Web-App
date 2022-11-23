window.addEventListener('load', seeDates)

function seeDates(){
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        let item = JSON.parse(localStorage.getItem(keys[i]))
        if(keys[i] == item.nid){
            values.push(item);
        }
    }

    values.sort(function(a,b){
        return new Date(a.apptDate) - new Date(b.apptDate);
    })
    
    createTableElements(values)
}

function createTableElements(values){
    const body = document.querySelector('#dates');
    values.forEach((date) => {
        const row = document.createElement('tr')
        
        const nidData = document.createElement('td');
        row.appendChild(nidData)
        
        const nidName = document.createElement('td');
        row.appendChild(nidName)
        
        const nidDate = document.createElement('td');
        row.appendChild(nidDate)

        const nidPhone = document.createElement('td');
        row.appendChild(nidPhone)

        const nidInfo = document.createElement('td');
        row.appendChild(nidInfo)
        
        const nidDelete = document.createElement('td');
        row.appendChild(nidDelete)

        body.appendChild(row)

        nidData.textContent = date.nid
        nidName.textContent = date.name + " " + date.surname
        nidDate.textContent = date.apptDate
        nidPhone.textContent = date.phone
        nidInfo.innerHTML = `<button type="button" class="btn btn-outline-info btn-sm" id="${date.nid}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
        </svg></button>`
        nidDelete.innerHTML = `<button type="button" class="btn btn-outline-danger btn-sm" id="${date.nid}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
        </svg></button>`
    }
    )
    dangerButtonsListener()
    infoButtonsListener()
}

function dangerButtonsListener(){
    const btn = document.querySelectorAll('.btn-outline-danger')

    btn.forEach(button => {
        button.addEventListener('click', () => {
            window.alert(`NID: ${button.id} date have been deleted.`)
            window.localStorage.removeItem(button.id)
            location.reload();
        });
    });
}

function infoButtonsListener(){
    const infoBtn = document.querySelectorAll('.btn-outline-info')
    infoBtn.forEach(button => {
        button.addEventListener('click', () => {
            let patient = JSON.parse(localStorage.getItem(button.id));
            window.alert(`Some extra info:
                        Brith date: ${patient.bDate},
                        Observations: ${patient.observations}.`)
        });
    });
}
