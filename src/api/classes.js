
export const addClass  = async classData =>{
      const response = await fetch(`https://assignment-server-12-indol.vercel.app/classes`,{
            method:'POST',
            headers:{
                  'content-type': 'application/json'
            },
            body:JSON.stringify(classData)
      })

      const data = await response.json()
      return data
}