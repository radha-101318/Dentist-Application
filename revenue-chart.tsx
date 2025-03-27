"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  { name: "Jan", total: 12400 },
  { name: "Feb", total: 14500 },
  { name: "Mar", total: 18000 },
  { name: "Apr", total: 16800 },
  { name: "May", total: 19600 },
  { name: "Jun", total: 22400 },
  { name: "Jul", total: 24780 },
  { name: "Aug", total: 23100 },
  { name: "Sep", total: 21500 },
  { name: "Oct", total: 20200 },
  { name: "Nov", total: 19800 },
  { name: "Dec", total: 21300 },
]

export default function RevenueChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="font-medium">Month</div>
                      <div className="font-medium">{payload[0].payload.name}</div>
                      <div className="font-medium">Revenue</div>
                      <div className="font-medium">${payload[0].value}</div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

