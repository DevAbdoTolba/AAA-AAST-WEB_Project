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

    console.log(id);

    const response = await fetch(
      process.env.BACKEND_API_URL + `/addTofev.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `id=${encodeURIComponent(id)}&token=${encodeURIComponent(token)}`,
      }
    );
    const data = await response.text();
    console.log(data);

    return data;
  };

  res.status(200).send(await getData());
}
