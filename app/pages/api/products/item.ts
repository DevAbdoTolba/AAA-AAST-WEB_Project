import { log } from "console";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const getData = async () => {
    console.log(process.env.BACKEND_API_URL);
    const id = req.query.id;
    const token = req.query.token;
    const response = await fetch(
      process.env.BACKEND_API_URL +
        `/product.php?id=${id}` +
        "" + // if there is token add it here
        (token ? `&token=${token}` : "")
    );
    const data = await response.json();

    return data;
  };

  res.status(200).send(await getData());
}
