import data from '../../../data'

export default async (req, res) => {
    console.log('/api/entry/get HIT!');
    console.log(req.query);
    let r = await data.getEntry(req.query.entryId);
    res.status(200).json(r);
};