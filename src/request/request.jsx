export default async function request(url , method, onsuccess) {
    try {
        const response = await fetch(url, {method: method})
        if(response.ok){
            const responseJson = await response.json()
            onsuccess(responseJson)
        }
    } catch (error) {
        console.log(error);
    }
}