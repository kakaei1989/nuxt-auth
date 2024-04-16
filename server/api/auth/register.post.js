export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    try {
        const data = await $fetch('http://localhost:8000/api/register' , {
            method: 'POST',
            body: 'body',
            headers: {
                'Accept': 'application/json',
            }
        })

        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error
    }

    return body
})