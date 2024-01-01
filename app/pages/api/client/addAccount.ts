import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  country: String;
  city: String;
  date: Date;
  gender: boolean | number;
}

type ResponseData = {
  message: string;
  status: number;
  data?: Data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let data: any;
  let result: {
    message: string;
    status: number;
  };
  const getData = async () => {
    try {
      // get data from params

      data = {...req.query,balance : 0, type : "user"};
      console.log(data);
      // endpoint : insertIntoUsers

      fetch(
        process.env.BACKEND_API_URL + "/signup.php",
        // post
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data).toString(),
        }
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
