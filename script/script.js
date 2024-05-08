/*
    Name: Lucas Rodrigues Moreira
    Student ID: 200555440
    E-mail: 200555440@student.georgianc.on.ca
*/



// create the function that will convert the currency
function getCurrency(){
    let amount = document.querySelector("#amount").value;
    let from = document.querySelector("#from").value;
    let to = document.querySelector("#to").value;
    

    let API_KEY = 'cdb750379966a26c6a92609d';

    let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;
    // using the fetch function to use the json
    fetch(url, {
        method: 'GET',
        headers: {'accept': 'application/json'}
    }).then(response => {
        if(!response.ok){
            throw new Error('Network Not OK');
        }
        else{
            return response.json();
        }
    }).then(data =>{
        //converting the data for the output
        getToFlagto(to);
        console.log('FLAG URL:', to);

        let convertedValue = data.conversion_result;
        let fromCurrencyName = data.base_code;
        let toCurrencyName = data.target_code;

        let outputDiv = document.getElementById("out");
        outputDiv.innerHTML = `Converted value: ${convertedValue} ${toCurrencyName} (from ${fromCurrencyName})`;
    
    }).catch(error => {
        console.error(error);
    })
}
// create a function that could take the flags and put in the images, close to the proper currency
function getToFlagto(to) {
    let url = `https://gist.githubusercontent.com/manishtiwari25/d3984385b1cb200b98bcde6902671599/raw/a851a2954291b186bc210c10e33957879e48e223/world_currency_symbols.json`
    fetch(url, {
        method: 'GET',
        headers: {'accept': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(to => {
            if (countryName.Code === to){
                let toFlag = countryName.Flag;
                

                let imgElement = document.createElement('img');
                imgElement.src = toFlag;
                document.getElementById("to-flag").innerHTML = '';
                document.getElementById("to-flag").appendChild(imgElement);
            }
        });
    }).catch(error => {
        console.error(error);
    })
}

function getToFlagfrom(from) {
    let url = `https://gist.githubusercontent.com/manishtiwari25/d3984385b1cb200b98bcde6902671599/raw/a851a2954291b186bc210c10e33957879e48e223/world_currency_symbols.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(from => {
            if (from.Code === from){
                let fromFlag = country.Flag;
                console.log('FLAG URL:', fromFlag);

                let imgElement = document.createElement('img');
                imgElement.src = fromFlag;
                document.getElementById('from-flag').innerHTML = '';
                document.getElementById('from-flag').appendChild(imgElement);
            }
        });
    }).catch(error => {
        console.error(error);
    })
}


