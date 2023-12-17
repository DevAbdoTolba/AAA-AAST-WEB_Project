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
    console.log(process.env.BACKEND_API_URL);
    
    const response = await fetch(process.env.BACKEND_API_URL+"/sql.php?data=testRec")
    const data =  
      await response.json()
    
    // console.log("done");
    
    return data
  }

  res.status(200).send(await getData())
}