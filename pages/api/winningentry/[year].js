import data from '../../../data'

export default async (req, res) => {
    console.log('/api/winningentry HIT!')
    let r = await data.getWinningEntry(parseInt(req.query.year));
    res.status(200).json(r);
};