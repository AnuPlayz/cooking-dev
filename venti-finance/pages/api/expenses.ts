import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.json({
        "last_month_expenses": [
            {
                "date": "2023-10-01",
                "amount": 150
            },
            {
                "date": "2023-10-04",
                "amount": 200
            },
            {
                "date": "2023-10-07",
                "amount": 180
            },
            {
                "date": "2023-10-10",
                "amount": 220
            },
            {
                "date": "2023-10-13",
                "amount": 170
            },
            {
                "date": "2023-10-16",
                "amount": 250
            },
            {
                "date": "2023-10-19",
                "amount": 190
            },
            {
                "date": "2023-10-22",
                "amount": 230
            },
            {
                "date": "2023-10-25",
                "amount": 160
            },
            {
                "date": "2023-10-28",
                "amount": 210
            },
            {
                "date": "2023-10-31",
                "amount": 240
            }
        ],
        "ongoing_expenses": [
            {
                "date": "2023-11-01",
                "amount": 220
            },
            {
                "date": "2023-11-04",
                "amount": 180
            },
            {
                "date": "2023-11-07",
                "amount": 200
            },
            {
                "date": "2023-11-10",
                "amount": 240
            }
        ]
    })
}
