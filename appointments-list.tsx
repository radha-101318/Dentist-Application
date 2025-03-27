import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTodaysAppointments } from "@/lib/data"
import { formatTime } from "@/lib/utils"

export default function AppointmentsList() {
  const appointments = getTodaysAppointments()

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Today's Appointments</CardTitle>
          <CardDescription>You have {appointments.length} appointments today</CardDescription>
        </div>
        <Button size="sm" variant="outline">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <div className="font-medium">{formatTime(appointment.time)}</div>
                <div>
                  <div className="font-medium">{appointment.patientName}</div>
                  <div className="text-sm text-muted-foreground">{appointment.procedure}</div>
                </div>
              </div>
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

