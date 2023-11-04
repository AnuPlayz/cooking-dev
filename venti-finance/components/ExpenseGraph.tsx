'use client';
import { Card, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Expense {
    date: string;
    amount: number;
}

interface Expenses {
    last_month_expenses: Expense[];
    ongoing_expenses: Expense[];
}

export default function ExpenseGraph() {
    const [ex, setEx] = useState<Expenses>({ last_month_expenses: [], ongoing_expenses: [] })

    useEffect(() => {
        fetch('/api/expenses')
            .then((res) => res.json())
            .then((data) => {
                setEx(data)
            })
    }, [])

    return (
        <Card>
            <CardBody>
                {(typeof window !== 'undefined') && <Chart
                    width={"450px"}
                    options={{
                        chart: {
                            type: 'rangeArea',
                            width: '500px',
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: 'smooth',
                        },
                        xaxis: {
                            type: 'datetime',
                        },
                        legend: {
                            show: false,
                        },
                        title: {
                            text: 'Expense Graph',
                            align: 'left',
                        },
                        tooltip: {
                            theme: "dark",
                        },
                        markers: {
                            size: 0,
                        },
                        grid: {
                            show: false,
                        },
                    }}
                    series={[
                        {
                            name: 'Ongoing Expenses',
                            data: ex.ongoing_expenses.map((e) => {
                                return {
                                    x: new Date(e.date).getTime(),
                                    y: e.amount,
                                }
                            }),
                        },
                        {
                            name: 'Last Month Expenses',
                            data: ex.last_month_expenses.map((e) => {
                                return {
                                    x: new Date(e.date).getTime(),
                                    y: e.amount,
                                }
                            }),
                        },
                    ]}
                />}
            </CardBody>
        </Card>
    )
}
