import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import RevenueChart from "./revenue-chart"
import PatientDemographicsChart from "./patient-demographics-chart"
import AppointmentTrendsChart from "./appointment-trends-chart"

export default function ReportsList() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="financial">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6 pt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue breakdown and trends</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <RevenueChart />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Procedures by Revenue</CardTitle>
                <CardDescription>Highest revenue generating procedures</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outstanding Payments</CardTitle>
                <CardDescription>Unpaid invoices and insurance claims</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patients" className="space-y-6 pt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Patient Demographics</CardTitle>
                <CardDescription>Age, gender, and location distribution</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <PatientDemographicsChart />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>New Patients</CardTitle>
                <CardDescription>Monthly new patient acquisition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Patient Retention</CardTitle>
                <CardDescription>Returning patient statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-6 pt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Appointment Trends</CardTitle>
                <CardDescription>Monthly appointment statistics</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <AppointmentTrendsChart />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cancellation Rate</CardTitle>
                <CardDescription>Appointment cancellation statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <BarChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Procedure Distribution</CardTitle>
                <CardDescription>Types of procedures performed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

