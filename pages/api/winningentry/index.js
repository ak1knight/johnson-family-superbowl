import data from '../../../data'

export default async (req, res) => {
    console.log('/api/winningentry HIT!')
    let r = await data.getWinningEntry();
    res.status(200).json(r);
};