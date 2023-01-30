import data from '../../../data'

export default async (req, res) => {
    console.log('/api/entry/get HIT!');
    console.log(req.query);
    const entry = JSON.parse(req.body).entry;
    console.log(entry);
    await data.updateEntry(parseInt(req.query.entryId), entry);
    res.status(200).end("OK");
};