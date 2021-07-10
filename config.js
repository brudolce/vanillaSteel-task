
//got the header from my browser's request to the endpoint, was having some CORs issues, kein zeit bruder, just copied n pasted here
export const get = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-GB,en;q=0.9,de-DE;q=0.8,de;q=0.7,pt-BR;q=0.6,pt;q=0.5,en-US;q=0.4,fr;q=0.3',
    'authorization': 'Basic YnJ1bm86RTl1aEdLeWlmYTloWXpJblp1VlZGQk8=',
    'cache-control': 'max-age=0',
    'upgrade-insecure-requests': 1,
    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}

//I am quite not sure if the token is somewhere on the header or on the response. Sould it be Authorization?
export const post = (token) => ({ 'token': `${token}`, ...get, })