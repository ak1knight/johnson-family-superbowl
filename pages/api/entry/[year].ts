import data from '../../../data'
import { Entry } from '../../../data/formdata';

export default async (req, res) => {
    console.log('/api/entry HIT!')
    let r = await data.readEntries(parseInt(req.query.year));
    res.status(200).json(r);
};