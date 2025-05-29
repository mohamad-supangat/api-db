await fetch("https://kodepos.posindonesia.co.id/CariKodepos", {
  credentials: "include",
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Type": "application/x-www-form-urlencoded",
    "Sec-GPC": "1",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    Priority: "u=0, i",
  },
  referrer: "https://kodepos.posindonesia.co.id/",
  body: "kodepos=ajibarang",
  method: "POST",
  mode: "cors",
}).then(async (x) => console.log(await x.text()));
