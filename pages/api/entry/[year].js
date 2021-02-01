import data from '../../../data'

export default async (req, res) => {
    console.log('/api/entry HIT!')
    let r = await data.readEntries(parseInt(req.query.year));
    res.status(200).json(r);
};