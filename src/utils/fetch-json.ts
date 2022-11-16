
function getHeaders() {
     const headers = {
         'Access-Control-Allow-Origin': '*',
         'Host': 'api.swgoh.gg',
         'content-type': 'application/json',
     };

    return headers;
}

export default async function fetch_json(request: string): Promise<Response> {

    request = `http://localhost:8080/${request}`
    // request = `https://cors-anywhere.herokuapp.com/${request}`

    return fetch(request)
        .then(response => {
            if (response.ok) {
                return response.text() ?? null
            }
            else {
                console.log(`fetch failed: ${response.status} ${response.statusText}`)
                return null
            }
        })
        .catch(err => {
            console.error(`fetch error: ${err}`)
            return null
        })

}
