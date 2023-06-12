const fetchButton = document.getElementById('fetchButton');

fetchButton.addEventListener('click', fetchData);


function fetchData(){
    const infoJsonUrl = './info.json';
    let p = new Promise(function(resolve, reject){
        
        fetch(infoJsonUrl)
          .then(response => response.json())
          .then(data => {resolve(data);})
          .catch(error => {reject(error);});
    })
    
    p.then(function(data){

        const jsonDataString = JSON.stringify(data);
        displayData(data);
        console.log(jsonDataString);
        console.log("resolved");
        }
    )
        
    .catch(function(mes){
        console.log(mes+" rejected")});

}

function displayData(data) {
    // Clear existing data
    dataList.innerHTML = '';

    if (Array.isArray(data)) { data.forEach((item, index) => {
        const listItem = document.createElement('li');
  
        // Add the degree label
        const degreeLabel = document.createTextNode(`degree ${index + 1} `);
        listItem.appendChild(degreeLabel);

        listItem.appendChild(document.createElement('br'));
  
        // Add the object properties
        for (const key in item) {
          const propText = document.createTextNode(`${key}: ${item[key]}`);
          listItem.appendChild(propText);
          listItem.appendChild(document.createElement('br'));
        }
  
        dataList.appendChild(listItem);
      });
    } else {
      console.error('Error: Invalid data format');
    }
  }
