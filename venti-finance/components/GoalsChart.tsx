'use client';
import { Card, CardBody } from "@nextui-org/react";
import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Goal {
    goal_description: string;
    goal_amount: number;
    amount_saved: number;
}

type Goals = Goal[];

export default function GoalsChart() {
    const [goals, setGoals] = useState<Goals>([]);

    useEffect(() => {
        fetch('/api/goals')
            .then((res) => res.json())
            .then((data) => {
                setGoals(data);
            })
    }, [])

    return (
        <Card>
            <CardBody>
                {(typeof window !== 'undefined') && <Chart
                    options={{
                        chart: {
                            type: "pie",
                        },
                        labels: goals.map(goal => goal.goal_description),
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: '500px'
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }],
                        title: {
                            text: "Goals",
                            align: "center",
                            margin: 10,
                            offsetX: 0,
                            offsetY: 0,
                            floating: false,
                            style: {
                                fontSize: "20px",
                                fontWeight: "bold",
                                fontFamily: undefined,
                                color: "#263238"
                            },
                        },
                        legend: {
                            position: 'bottom',
                            offsetY: 0,
                        },
                        tooltip: {
                            y: {
                                formatter: function (val: number) {
                                    return "$" + val
                                }
                            }
                        },
                        dataLabels: {
                            enabled: false
                        },
                    }}
                    series={goals.map(goal => goal.amount_saved)}
                    type="pie"
                    
                />}
            </CardBody>
        </Card>
    )
}
