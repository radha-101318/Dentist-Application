"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getAppointmentsByDate } from "@/lib/data"
import { formatTime } from "@/lib/utils"
import Link from "next/link"

export default function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<"day" | "week">("day")

  // Format the current date for display
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  // Get appointments for the current date
  const appointments = getAppointmentsByDate(currentDate)

  // Navigate to previous day/week
  const goToPrevious = () => {
    const newDate = new Date(currentDate)
    if (view === "day") {
      newDate.setDate(newDate.getDate() - 1)
    } else {
      newDate.setDate(newDate.getDate() - 7)
    }
    setCurrentDate(newDate)
  }

  // Navigate to next day/week
  const goToNext = () => {
    const newDate = new Date(currentDate)
    if (view === "day") {
      newDate.setDate(newDate.getDate() + 1)
    } else {
      newDate.setDate(newDate.getDate() + 7)
    }
    setCurrentDate(newDate)
  }

  // Go to today
  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle>Appointment Calendar</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className={view === "day" ? "bg-muted" : ""}
              onClick={() => setView("day")}
            >
              Day
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={view === "week" ? "bg-muted" : ""}
              onClick={() => setView("week")}
            >
              Week
            </Button>
          </div>
        </div>
        <CardDescription>Manage and view all scheduled appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={goToPrevious}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={goToNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="text-lg font-medium">{formattedDate}</div>
          </div>
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
        </div>

        {view === "day" ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead className="hidden md:table-cell">Procedure</TableHead>
                  <TableHead className="hidden md:table-cell">Dentist</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.length > 0 ? (
                  appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className="font-medium">{formatTime(appointment.time)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={appointment.patientAvatar} />
                            <AvatarFallback>
                              {appointment.patientName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <Link href={`/patients/${appointment.patientId}`} className="font-medium hover:underline">
                            {appointment.patientName}
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{appointment.procedure}</TableCell>
                      <TableCell className="hidden md:table-cell">{appointment.dentist}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            appointment.status === "Confirmed"
                              ? "default"
                              : appointment.status === "Pending"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {appointment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                      No appointments scheduled for this day.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="rounded-md border">
            <div className="grid grid-cols-7 border-b">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2 text-center font-medium">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 grid-rows-[repeat(4,minmax(100px,1fr))]">
              {Array.from({ length: 28 }, (_, i) => (
                <div key={i} className="border-b border-r p-2 last:border-r-0 hover:bg-muted/50">
                  <div className="mb-1 text-sm font-medium">{i + 1}</div>
                  <div className="space-y-1">
                    {i % 7 === 2 && <div className="rounded bg-primary/10 p-1 text-xs">3 appointments</div>}
                    {i % 7 === 4 && <div className="rounded bg-primary/10 p-1 text-xs">1 appointment</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

