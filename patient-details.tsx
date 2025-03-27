import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pencil, Phone, Mail, MapPin, Calendar } from "lucide-react"
import type { Patient } from "@/lib/types"

interface PatientDetailsProps {
  patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="space-y-1">
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Patient's personal and contact details</CardDescription>
          </div>
          <Button variant="outline" size="icon">
            <Pencil className="h-4 w-4" />
            <span className="sr-only">Edit patient</span>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={patient.avatar} alt={`${patient.firstName} ${patient.lastName}`} />
              <AvatarFallback>
                {patient.firstName.charAt(0)}
                {patient.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-xl font-medium">
                {patient.firstName} {patient.lastName}
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={patient.status === "Active" ? "default" : "secondary"}>{patient.status}</Badge>
                <span className="text-sm text-muted-foreground">ID: {patient.id}</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{patient.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{patient.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{patient.address}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Date of Birth: {patient.dateOfBirth}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Medical Information</CardTitle>
          <CardDescription>Patient's medical history and insurance details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Insurance</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Provider:</div>
              <div>{patient.insurance?.provider || "N/A"}</div>
              <div className="text-muted-foreground">Policy Number:</div>
              <div>{patient.insurance?.policyNumber || "N/A"}</div>
              <div className="text-muted-foreground">Group Number:</div>
              <div>{patient.insurance?.groupNumber || "N/A"}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Medical History</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Allergies:</div>
              <div>{patient.medicalHistory?.allergies.join(", ") || "None"}</div>
              <div className="text-muted-foreground">Medications:</div>
              <div>{patient.medicalHistory?.medications.join(", ") || "None"}</div>
              <div className="text-muted-foreground">Conditions:</div>
              <div>{patient.medicalHistory?.conditions.join(", ") || "None"}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Notes</h4>
            <p className="text-sm">{patient.notes || "No notes available."}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

