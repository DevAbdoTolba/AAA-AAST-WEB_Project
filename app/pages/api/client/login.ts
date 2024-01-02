import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

interface DataSent {
  email: String;
  password: String;
}
interface DataGet {
    token: String;
    firstname: String;
    balance: Number;    
}
  
type ResponseData = {
  message: string;
  status: number;
  data?: DataGet;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let data: any;

 
  const getData = async () => {
    try {
      // get data from params

      data = req.query;
      console.log(data);
      // endpoint : insertIntoUsers

      fetch(
        process.env.BACKEND_API_URL + `/signin.php?email=${data.email}&password=${data.password}` ,
      )
        .then((data) => data.json())
        .then((resData) => res.status(200).send({ ...resData }))
        .catch((err) => res.status(400).send(err));

      // res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ message: "Error happened", status: 500 });
    }
  };

  getData();
}
