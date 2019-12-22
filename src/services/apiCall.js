
export default (method) => {
    console.log('calling api')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(getPostApiCall(method))
        }, 100);
    })
}


async function getApiCall(url) {
    console.log('url :::: ', url)
    try {
        let response = await fetch(url);
        let responseJson = await response.json();
        return responseJson;
    } catch(error) {
      console.error(error);
    }
}


async function getPostApiCall(method) {
    console.log('url :::: ', method.type);
    console.log('url payload:::: ', method.payload);
    try {
        // for (const [key, value] of Object.entries(method.payload)) {
        //     console.log(key, value);
        //   }
   let response = await fetch(method.type,{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body : JSON.stringify(method.payload)
   })
   let responseJson = await response.json();
   return responseJson;
    } catch(error) {
        console.log('error ::::',error)
        alert(error)
    }
}