fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
