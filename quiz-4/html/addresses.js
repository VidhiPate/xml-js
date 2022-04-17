/*const loadData = () =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open(
      "GET",
      `https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`,
      true
    );
    xhttp.send();
  });

loadData().then((data) => {
  // render data in html table
});
*/

const htmlToElement = (html) => {
  const template = document.createElement("template");
  html = html.trim(); 
  template.innerHTML = html;
  return template.content.firstChild;
};

const renderTable = () => {
  const table = document.getElementById("table-main");

  if (!table) {
    throw new Error("No table element found");
  }

  let data = [
    {
      "createdAt": "2022-04-10T19:06:49.155Z",
      "userName": "Lucius11",
      "isSuspended": false,
      "email": "Maximo_Blick@gmail.com",
      "id": "1",
      "address": [
        {
          "country": "TF",
          "state": "California",
          "city": "North Lilyhaven",
          "zipCode": "95974-7870",
          "id": "1",
          "userId": "1"
        }
      ],
      "vehicle": [
        {
          "vin": "R5APVAX399RP61264",
          "manufacturer": "Volkswagen",
          "model": "A8",
          "type": "Crew Cab Pickup",
          "age": 26,
          "id": "1",
          "userId": "1"
        },
        {
          "vin": "UZ41EWD4F3K270847",
          "manufacturer": "Hyundai",
          "model": "Fortwo",
          "type": "Extended Cab Pickup",
          "age": 79,
          "id": "51",
          "userId": "1"
        },
        {
          "vin": "64KZCNEK15FS57248",
          "manufacturer": "Jaguar",
          "model": "Malibu",
          "type": "Crew Cab Pickup",
          "age": 78,
          "id": "75",
          "userId": "1"
        }
      ]
    },
    {
      "createdAt": "2022-04-10T14:27:49.570Z",
      "userName": "Nicolas.Mayer48",
      "isSuspended": false,
      "email": "Melba.Torp38@gmail.com",
      "id": "2",
      "address": [
        {
          "country": "AO",
          "state": "Minnesota",
          "city": "Hempstead",
          "zipCode": "67028-2668",
          "id": "2",
          "userId": "2"
        }
      ],
      "vehicle": [
        {
          "vin": "Z4KY2UPAKYFF20274",
          "manufacturer": "Rolls Royce",
          "model": "Volt",
          "type": "Hatchback",
          "age": 23,
          "id": "2",
          "userId": "2"
        },
        {
          "vin": "NUH77TSHKVNM72975",
          "manufacturer": "Fiat",
          "model": "LeBaron",
          "type": "Coupe",
          "age": 24,
          "id": "52",
          "userId": "2"
        },
        {
          "vin": "BB91LX5JAACZ87537",
          "manufacturer": "Honda",
          "model": "Aventador",
          "type": "Extended Cab Pickup",
          "age": 70,
          "id": "76",
          "userId": "2"
        }
      ]
    },
    {
      "createdAt": "2022-04-10T09:03:09.694Z",
      "userName": "Demetris_Weissnat77",
      "isSuspended": false,
      "email": "Vivianne.Blick@gmail.com",
      "id": "3",
      "address": [
        {
          "country": "IQ",
          "state": "New Hampshire",
          "city": "North Rubyland",
          "zipCode": "95151-0807",
          "id": "3",
          "userId": "3"
        }
      ],
      "vehicle": [
        {
          "vin": "F4WDADF7VGN124196",
          "manufacturer": "Audi",
          "model": "Golf",
          "type": "Extended Cab Pickup",
          "age": 3,
          "id": "3",
          "userId": "3"
        },
        {
          "vin": "BZNPK428Y8BG70515",
          "manufacturer": "Ferrari",
          "model": "Fiesta",
          "type": "Hatchback",
          "age": 38,
          "id": "53",
          "userId": "3"
        },
        {
          "vin": "FYKMVTYYSXC028289",
          "manufacturer": "Mazda",
          "model": "Ranchero",
          "type": "SUV",
          "age": 65,
          "id": "77",
          "userId": "3"
        }
      ]
    }
  ]
  

  const withFilters = Boolean(window.location.search);

  if (withFilters) {
    const params = new URLSearchParams(window.location.search);
    const valueTerm = params.get(`value`).toLowerCase();
    const inputControl = document.getElementById(`input-term`);
    const filterName = params.get(`filters`).toLowerCase();
    inputControl.value = valueTerm;

    switch(filterName) {

      case 'ad':
          data = data.filter(({ address }) => address.toLowerCase().includes(valueTerm));
          break; 
      case 'fn':
          data = data.filter(({ EmployeeId }) => EmployeeId.toLowerCase().includes(valueTerm));
          break;
      case 'fname':
          data = data.filter(({ FirstName }) => FirstName.toLowerCase().includes(valueTerm));
          break;
    }
  
  }

  const rows = data.map(({ address }) =>
  address.map(({ country,state,city,zipCode,id,userId })=>
    table.appendChild(
      htmlToElement(
        `<tr>
          <td>${country}</td>
          <td>${state}</td>
          <td>${city}</td>
          <td>${zipCode}</td>
          <td>${id}</td>
          <td>${userId}</td>
        </tr>`
      )
    )
  )

  );
};

renderTable();

const resetTable = () => {

  const table = document.getElementById("table-main");
  table.innerHTML = "";
  const inputControl = document.getElementById(`input-term`);
  inputControl.value = "";
  window.location = 'http://127.0.0.1:5500/Xml-and-Js/quiz-4/html/addresses.html'

  let data = [
    {
      "createdAt": "2022-04-10T19:06:49.155Z",
      "userName": "Lucius11",
      "isSuspended": false,
      "email": "Maximo_Blick@gmail.com",
      "id": "1",
      "address": [
        {
          "country": "TF",
          "state": "California",
          "city": "North Lilyhaven",
          "zipCode": "95974-7870",
          "id": "1",
          "userId": "1"
        }
      ],
      "vehicle": [
        {
          "vin": "R5APVAX399RP61264",
          "manufacturer": "Volkswagen",
          "model": "A8",
          "type": "Crew Cab Pickup",
          "age": 26,
          "id": "1",
          "userId": "1"
        },
        {
          "vin": "UZ41EWD4F3K270847",
          "manufacturer": "Hyundai",
          "model": "Fortwo",
          "type": "Extended Cab Pickup",
          "age": 79,
          "id": "51",
          "userId": "1"
        },
        {
          "vin": "64KZCNEK15FS57248",
          "manufacturer": "Jaguar",
          "model": "Malibu",
          "type": "Crew Cab Pickup",
          "age": 78,
          "id": "75",
          "userId": "1"
        }
      ]
    },
    {
      "createdAt": "2022-04-10T14:27:49.570Z",
      "userName": "Nicolas.Mayer48",
      "isSuspended": false,
      "email": "Melba.Torp38@gmail.com",
      "id": "2",
      "address": [
        {
          "country": "AO",
          "state": "Minnesota",
          "city": "Hempstead",
          "zipCode": "67028-2668",
          "id": "2",
          "userId": "2"
        }
      ],
      "vehicle": [
        {
          "vin": "Z4KY2UPAKYFF20274",
          "manufacturer": "Rolls Royce",
          "model": "Volt",
          "type": "Hatchback",
          "age": 23,
          "id": "2",
          "userId": "2"
        },
        {
          "vin": "NUH77TSHKVNM72975",
          "manufacturer": "Fiat",
          "model": "LeBaron",
          "type": "Coupe",
          "age": 24,
          "id": "52",
          "userId": "2"
        },
        {
          "vin": "BB91LX5JAACZ87537",
          "manufacturer": "Honda",
          "model": "Aventador",
          "type": "Extended Cab Pickup",
          "age": 70,
          "id": "76",
          "userId": "2"
        }
      ]
    },
    {
      "createdAt": "2022-04-10T09:03:09.694Z",
      "userName": "Demetris_Weissnat77",
      "isSuspended": false,
      "email": "Vivianne.Blick@gmail.com",
      "id": "3",
      "address": [
        {
          "country": "IQ",
          "state": "New Hampshire",
          "city": "North Rubyland",
          "zipCode": "95151-0807",
          "id": "3",
          "userId": "3"
        }
      ],
      "vehicle": [
        {
          "vin": "F4WDADF7VGN124196",
          "manufacturer": "Audi",
          "model": "Golf",
          "type": "Extended Cab Pickup",
          "age": 3,
          "id": "3",
          "userId": "3"
        },
        {
          "vin": "BZNPK428Y8BG70515",
          "manufacturer": "Ferrari",
          "model": "Fiesta",
          "type": "Hatchback",
          "age": 38,
          "id": "53",
          "userId": "3"
        },
        {
          "vin": "FYKMVTYYSXC028289",
          "manufacturer": "Mazda",
          "model": "Ranchero",
          "type": "SUV",
          "age": 65,
          "id": "77",
          "userId": "3"
        }
      ]
    }
  ]
  

  table.append(
      htmlToElement(
          `<tr id="table-main">
              <th>Address</th>
        </tr>`
      )
  );
  
  const rows = data.map(({ address }) =>
  address.map(({  country,state,city,zipCode,id,userId })=>
  table.appendChild(
    htmlToElement(
      `<tr>
        <td>${country}</td>
        <td>${state}</td>
        <td>${city}</td>
        <td>${zipCode}</td>
        <td>${id}</td>
        <td>${userId}</td>
      </tr>`
    )
  )
  )
  );
  
}