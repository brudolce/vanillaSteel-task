import fetch from 'node-fetch'
import * as header from './config.js'
import { minNumberOfSquares } from './agorithm.js'


const calls = async () => {
    try {
        console.time('Processing Execution Time');

        //GET
        const resGet = await fetch('https://ctf.makemake.cc/task3/challenge', {
            headers: header.get
        })
        const resGetBody = await resGet.json()


        //APPLY SOLUTION
        const { challenge, token } = resGetBody
        let postBody = {}
        Object.keys(challenge)
            .forEach(e => postBody = { ...postBody, [e]: minNumberOfSquares(challenge[e]) })
        console.log('\npost body: ', postBody)


        console.timeEnd('Processing Execution Time');

        //POST
        const resPost = await fetch('https://ctf.makemake.cc/task3/submit', {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: header.post(token)
        });
        console.log('\nresPost', resPost)
        // const resPostBody = await resPost.json()
        // console.log('\npostBody\n', resPostBody)

    } catch (e) {
        console.log('error: ', e)
    }
}

calls()
