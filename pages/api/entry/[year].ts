import data from '../../../data'
import { Entry } from '../../../data/formdata';

async function list(req, res) {
    console.log('/api/entry HIT!');
    let r = await data.readEntries(parseInt(req.query.year));
    res.status(200).json(r);
};

export default list;