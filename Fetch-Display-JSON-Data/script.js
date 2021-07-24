fetch('localData.json')
  .then((response) => response.json())
  .then((data) => {
    printData(data);
  })
  .catch((err) => `An ${err} occured`);

function printData(dataItem, dataIndex, dataArr) {
  dataItem.forEach((item) => {
    document.querySelector('#output').innerHTML += `
        <h2 style="font-family: 'Segoe UI', Arial, sans-serif"><small>${item.id}</small>. ${item.firstName} ${item.lastName}</h2>
        <hr>
    `;
  });
}
