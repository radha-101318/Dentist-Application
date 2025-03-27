import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { getRecentPatients } from "@/lib/data"
import Link from "next/link"

export default function RecentPatients() {
  const patients = getRecentPatients()

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Recent Patients</CardTitle>
          <CardDescription>Recently added or updated patient records</CardDescription>
        </div>
        <Button size="sm" variant="outline" asChild>
          <Link href="/patients">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient) => (
            <div key={patient.id} className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={patient.avatar} />
                  <AvatarFallback>
                    {patient.firstName.charAt(0)}
                    {patient.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/patients/${patient.id}`} className="font-medium hover:underline">
                    {patient.firstName} {patient.lastName}
                  </Link>
                  <div className="text-sm text-muted-foreground">{patient.email}</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">{patient.lastVisit}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

