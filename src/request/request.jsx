export default async function request (url, onSuccess) {
    try {
        const response = await fetch(url)
        if(response.ok){
            const responseJson = await response.json()
            onSuccess(responseJson)
        }
    } catch (error) {
        console.log(error);
    }
}