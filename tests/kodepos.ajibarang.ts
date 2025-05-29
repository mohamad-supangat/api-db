fetch("http://localhost:3000/kodepos/search?q=ajibarang")
  .then((x) => x.json())
  .then((x) => console.log(x));
