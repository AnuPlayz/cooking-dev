import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        {
            "goal_description": "Vacation to Hawaii",
            "goal_amount": 5000,
            "amount_saved": 1500
        },
        {
            "goal_description": "Valorant Reaver Skin Collection",
            "goal_amount": 200,
            "amount_saved": 140
        }
    ]);
}
