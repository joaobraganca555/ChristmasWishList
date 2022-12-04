import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("ChristmasWishList");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myList = await db.collection("Lists").insertOne(bodyObject);
      res.json(myList.ops[0]);
      break;
    case "GET":
      const allLists = await db.collection("Lists").find({}).toArray();
      res.json({ status: 200, data: allLists });
      break;
  }
}
