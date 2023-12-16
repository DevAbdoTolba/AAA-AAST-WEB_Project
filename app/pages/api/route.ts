import { log } from 'console'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {



  const getData = async () => {
    const response = await fetch('http://localhost:8700/')
    const data =  
      await response.json()
    
    // console.log("done");
    
    return data
  }

  res.status(200).send(await getData())
}