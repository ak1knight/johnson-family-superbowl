import data from '../../../data'

export default async (req, res) => {
    console.log('/api/entry HIT!')
    let r = await data.readEntries(2020);
    res.status(200).json(r);
};