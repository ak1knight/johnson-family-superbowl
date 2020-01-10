import data from '../../../data'

export default async (req, res) => {
    console.log('/api/entry HIT!')
    let r = await data.readEntries();
    res.status(200).json(r);
};