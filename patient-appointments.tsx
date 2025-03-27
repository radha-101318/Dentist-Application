import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plus } from "lucide-react"
import { getPatientAppointments } from "@/lib/data"
import { formatDate, formatTime } from "@/lib/utils"

interface PatientAppointmentsProps {
  patientId: string
}

export default function PatientAppointments({ patientId }: PatientAppointmentsProps) {
  const appointments = getPatientAppointments(patientId)

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle>Appointments</CardTitle>
          <CardDescription>Patient's upcoming and past appointments</CardDescription>
        </div>
        <Button size="sm" className="gap-1">
          <Plus className="h-3.5 w-3.5" />
          <span>Schedule</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="mb-4 text-sm font-medium">Upcoming Appointments</h4>
            {appointments.upcoming.length > 0 ? (
              <div className="space-y-4">
                {appointments.upcoming.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <div className="font-medium">{appointment.procedure}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        <span>{formatDate(appointment.date)}</span>
                        <Clock className="ml-3 mr-1 h-3.5 w-3.5" />
                        <span>{formatTime(appointment.time)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={appointment.status === "Confirmed" ? "default" : "outline"}>
                        {appointment.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-6 text-center">
                <h4 className="text-sm font-medium">No upcoming appointments</h4>
                <p className="mt-1 text-sm text-muted-foreground">Schedule a new appointment for this patient.</p>
                <Button className="mt-4" size="sm">
                  Schedule Appointment
                </Button>
              </div>
            )}
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium">Past Appointments</h4>
            {appointments.past.length > 0 ? (
              <div className="space-y-4">
                {appointments.past.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <div className="font-medium">{appointment.procedure}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        <span>{formatDate(appointment.date)}</span>
                        <Clock className="ml-3 mr-1 h-3.5 w-3.5" />
                        <span>{formatTime(appointment.time)}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{appointment.status}</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-6 text-center">
                <h4 className="text-sm font-medium">No past appointments</h4>
                <p className="mt-1 text-sm text-muted-foreground">This patient has no appointment history.</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

