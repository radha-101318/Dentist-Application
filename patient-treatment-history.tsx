import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { getPatientTreatmentHistory } from "@/lib/data"

interface PatientTreatmentHistoryProps {
  patientId: string
}

export default function PatientTreatmentHistory({ patientId }: PatientTreatmentHistoryProps) {
  const treatments = getPatientTreatmentHistory(patientId)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatment History</CardTitle>
        <CardDescription>Patient's dental treatment history and procedures</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Procedure</TableHead>
              <TableHead>Dentist</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {treatments.map((treatment) => (
              <TableRow key={treatment.id}>
                <TableCell>{treatment.date}</TableCell>
                <TableCell>{treatment.procedure}</TableCell>
                <TableCell>{treatment.dentist}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      treatment.status === "Completed"
                        ? "default"
                        : treatment.status === "Scheduled"
                          ? "outline"
                          : "secondary"
                    }
                  >
                    {treatment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">${treatment.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

