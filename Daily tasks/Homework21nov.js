// -------------------- homework 21 nov -------------------------------

function getData() {
  let location = navigator.geolocation.getCurrentPosition((data) => {
    let latt = data.coords.latitude;
    let logn = data.coords.longitude;
    async function whereAmI(a, b) {
      try {
        const uri = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${a}&longitude=${b}&localityLanguage=en`;
        const data = await fetch(uri);
        if (!data.ok)
          throw new Error("Please provide correct lgnitude and lattitude");
        const result = await data.json();
        console.log(
          `You are in : ${result.city}\nIn state : ${result.localityInfo.administrative[1].name}\nFrom : ${result.localityInfo.administrative[4].name}\nActual Locality : ${result.locality}`
        );
      } catch (error) {
        console.log(error);
      }
    }
    whereAmI(latt, logn);
  });
  return location;
}

console.log(getData());


// link for defer and async.....
// https://blog.webdevsimplified.com/2019-12/javascript-loading-attributes-explained/

