import data from "../../../data";

export default async (req, res) => {
    console.log("/api/winningentry/new HIT!");
    const entry = JSON.parse(req.body).entry;
    await data.createWinningEntry(entry);
    res.status(200).end("OK");
};