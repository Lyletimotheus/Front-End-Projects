fetch('localData.json')
  .then((response) => response.json()) //
  .then((data) => console.log(data))
  .catch((err) => `An ${err} occured`);
