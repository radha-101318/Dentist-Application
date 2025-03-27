"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  { name: "Jan", scheduled: 120, completed: 95, cancelled: 25 },
  { name: "Feb", scheduled: 132, completed: 105, cancelled: 27 },
  { name: "Mar", scheduled: 141, completed: 118, cancelled: 23 },
  { name: "Apr", scheduled: 158, completed: 132, cancelled: 26 },
  { name: "May", scheduled: 162, completed: 140, cancelled: 22 },
  { name: "Jun", scheduled: 175, completed: 150, cancelled: 25 },
  { name: "Jul", scheduled: 180, completed: 160, cancelled: 20 },
  { name: "Aug", scheduled: 190, completed: 165, cancelled: 25 },
  { name: "Sep", scheduled: 185, completed: 160, cancelled: 25 },
  { name: "Oct", scheduled: 175, completed: 155, cancelled: 20 },
  { name: "Nov", scheduled: 165, completed: 145, cancelled: 20 },
  { name: "Dec", scheduled: 155, completed: 135, cancelled: 20 },
]

export default function AppointmentTrendsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="font-medium">{label}</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-sm text-muted-foreground">Scheduled</div>
                      <div className="text-sm font-medium">{payload[0].value}</div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                      <div className="text-sm font-medium">{payload[1].value}</div>
                      <div className="text-sm text-muted-foreground">Cancelled</div>
                      <div className="text-sm font-medium">{payload[2].value}</div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Line type="monotone" dataKey="scheduled" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="completed" stroke="hsl(var(--success))" strokeWidth={2} />
          <Line type="monotone" dataKey="cancelled" stroke="hsl(var(--destructive))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

