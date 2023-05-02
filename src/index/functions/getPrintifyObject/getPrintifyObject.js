import accesskey from "../../accesskey";

async function getPrintifyObject () {
    console.log('Fetching Printify Data...');
    try {

        let response = await fetch('http://8.40.62.125:49000/', {
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: 'Bearer ' + accesskey
            }
        });
        console.log('RESPONSE');
        console.log(response);
        const content = await response.json();
        return content;
    } catch (error) {
        console.log(error);
    }

}

export default getPrintifyObject;