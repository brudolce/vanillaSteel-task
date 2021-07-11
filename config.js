
//got the header from my browser's request to the endpoint, was having some CORs issues, kein zeit bruder, just copied n pasted here
export const get = {
    'authorization': `Basic ${Buffer.from('bruno:E9uhGKyifa9hYzInZuVVFBO').toString('base64')}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

//I am quite not sure if the token is somewhere on the header or on the response. Sould it be Authorization?
export const post = (token) => ({ 'token': `${token}`, ...get, })