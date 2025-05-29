fetch("http://localhost:3000/sekolah/search?q=ajibarang")
  .then((x) => x.json())
  .then((x) => console.log(x));
