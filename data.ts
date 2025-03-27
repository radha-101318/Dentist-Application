import type { Patient, Appointment, TreatmentRecord, InventoryItem } from "./types"

// Mock data for patients
const patients: Patient[] = [
  {
    id: "p1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, USA",
    dateOfBirth: "1985-06-15",
    status: "Active",
    lastVisit: "2023-10-12",
    avatar: "/placeholder.svg",
    insurance: {
      provider: "DentalCare Plus",
      policyNumber: "DCP-123456",
      groupNumber: "GRP-789",
    },
    medicalHistory: {
      allergies: ["Penicillin"],
      medications: ["Lisinopril"],
      conditions: ["Hypertension"],
    },
    notes: "Patient prefers morning appointments.",
  },
  {
    id: "p2",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "(555) 987-6543",
    address: "456 Oak Ave, Somewhere, USA",
    dateOfBirth: "1990-03-22",
    status: "Active",
    lastVisit: "2023-11-05",
    avatar: "/placeholder.svg",
    insurance: {
      provider: "MetLife Dental",
      policyNumber: "ML-789012",
      groupNumber: "GRP-456",
    },
    medicalHistory: {
      allergies: ["Latex"],
      medications: [],
      conditions: ["Asthma"],
    },
    notes: "Patient has dental anxiety, consider sedation options.",
  },
  {
    id: "p3",
    firstName: "Robert",
    lastName: "Johnson",
    email: "robert.johnson@example.com",
    phone: "(555) 456-7890",
    address: "789 Pine St, Elsewhere, USA",
    dateOfBirth: "1978-11-30",
    status: "Inactive",
    lastVisit: "2022-08-17",
    avatar: "/placeholder.svg",
    insurance: {
      provider: "Delta Dental",
      policyNumber: "DD-345678",
      groupNumber: "GRP-123",
    },
    medicalHistory: {
      allergies: [],
      medications: ["Metformin"],
      conditions: ["Diabetes Type 2"],
    },
    notes: "Patient needs to update insurance information.",
  },
  {
    id: "p4",
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@example.com",
    phone: "(555) 789-0123",
    address: "321 Elm St, Nowhere, USA",
    dateOfBirth: "1995-08-10",
    status: "Active",
    lastVisit: "2023-12-01",
    avatar: "/placeholder.svg",
    insurance: {
      provider: "Cigna Dental",
      policyNumber: "CD-901234",
      groupNumber: "GRP-567",
    },
    medicalHistory: {
      allergies: ["Sulfa drugs"],
      medications: [],
      conditions: [],
    },
    notes: "",
  },
  {
    id: "p5",
    firstName: "Michael",
    lastName: "Wilson",
    email: "michael.wilson@example.com",
    phone: "(555) 234-5678",
    address: "654 Maple Ave, Anyplace, USA",
    dateOfBirth: "1982-04-05",
    status: "Active",
    lastVisit: "2023-09-20",
    avatar: "/placeholder.svg",
    insurance: {
      provider: "Aetna Dental",
      policyNumber: "AD-567890",
      groupNumber: "GRP-234",
    },
    medicalHistory: {
      allergies: [],
      medications: ["Atorvastatin"],
      conditions: ["High Cholesterol"],
    },
    notes: "Patient prefers afternoon appointments.",
  },
]

// Generate more mock patients
for (let i = 6; i <= 30; i++) {
  patients.push({
    id: `p${i}`,
    firstName: `FirstName${i}`,
    lastName: `LastName${i}`,
    email: `patient${i}@example.com`,
    phone: `(555) ${i}00-${i}999`,
    address: `${i}00 Street, City, USA`,
    dateOfBirth: `19${Math.floor(Math.random() * 30) + 70}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
    status: i % 5 === 0 ? "Inactive" : "Active",
    lastVisit: `2023-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
    avatar: "/placeholder.svg",
    insurance: {
      provider: ["DentalCare Plus", "MetLife Dental", "Delta Dental", "Cigna Dental", "Aetna Dental"][
        Math.floor(Math.random() * 5)
      ],
      policyNumber: `POL-${i}${i}${i}${i}${i}${i}`,
      groupNumber: `GRP-${i}${i}${i}`,
    },
    medicalHistory: {
      allergies: i % 3 === 0 ? ["Penicillin"] : [],
      medications: i % 4 === 0 ? ["Medication" + i] : [],
      conditions: i % 5 === 0 ? ["Condition" + i] : [],
    },
    notes: i % 2 === 0 ? `Note for patient ${i}` : "",
  })
}

// Mock data for today's appointments
const todaysAppointments: Appointment[] = [
  {
    id: "a1",
    patientId: "p1",
    patientName: "John Doe",
    patientAvatar: "/placeholder.svg",
    procedure: "Dental Cleaning",
    date: new Date().toISOString().split("T")[0],
    time: "09:00",
    dentist: "Dr. Smith",
    status: "Confirmed",
    notes: "",
  },
  {
    id: "a2",
    patientId: "p2",
    patientName: "Jane Smith",
    patientAvatar: "/placeholder.svg",
    procedure: "Filling",
    date: new Date().toISOString().split("T")[0],
    time: "10:30",
    dentist: "Dr. Johnson",
    status: "Confirmed",
    notes: "",
  },
  {
    id: "a3",
    patientId: "p4",
    patientName: "Emily Davis",
    patientAvatar: "/placeholder.svg",
    procedure: "Root Canal",
    date: new Date().toISOString().split("T")[0],
    time: "13:00",
    dentist: "Dr. Williams",
    status: "Pending",
    notes: "Patient requested confirmation call",
  },
  {
    id: "a4",
    patientId: "p5",
    patientName: "Michael Wilson",
    patientAvatar: "/placeholder.svg",
    procedure: "Consultation",
    date: new Date().toISOString().split("T")[0],
    time: "15:30",
    dentist: "Dr. Smith",
    status: "Confirmed",
    notes: "",
  },
]

// Mock data for patient treatment history
const treatmentHistory: Record<string, TreatmentRecord[]> = {
  p1: [
    {
      id: "t1",
      date: "2023-10-12",
      procedure: "Dental Cleaning",
      dentist: "Dr. Smith",
      status: "Completed",
      cost: 120,
      notes: "Regular cleaning, no issues found.",
    },
    {
      id: "t2",
      date: "2023-07-05",
      procedure: "X-Ray",
      dentist: "Dr. Johnson",
      status: "Completed",
      cost: 85,
      notes: "Full mouth X-rays taken.",
    },
    {
      id: "t3",
      date: "2023-01-20",
      procedure: "Filling",
      dentist: "Dr. Smith",
      status: "Completed",
      cost: 200,
      notes: "Composite filling on tooth #18.",
    },
  ],
  p2: [
    {
      id: "t4",
      date: "2023-11-05",
      procedure: "Dental Cleaning",
      dentist: "Dr. Williams",
      status: "Completed",
      cost: 120,
      notes: "Regular cleaning, slight gingivitis noted.",
    },
    {
      id: "t5",
      date: "2023-05-12",
      procedure: "Crown",
      dentist: "Dr. Johnson",
      status: "Completed",
      cost: 950,
      notes: "Porcelain crown placed on tooth #14.",
    },
  ],
  p3: [
    {
      id: "t6",
      date: "2022-08-17",
      procedure: "Dental Cleaning",
      dentist: "Dr. Smith",
      status: "Completed",
      cost: 120,
      notes: "Regular cleaning, recommended flossing more frequently.",
    },
  ],
  p4: [
    {
      id: "t7",
      date: "2023-12-01",
      procedure: "Root Canal",
      dentist: "Dr. Williams",
      status: "Completed",
      cost: 1200,
      notes: "Root canal therapy on tooth #30.",
    },
    {
      id: "t8",
      date: "2023-12-15",
      procedure: "Crown",
      dentist: "Dr. Williams",
      status: "Scheduled",
      cost: 950,
      notes: "Crown to be placed on tooth #30 following root canal.",
    },
  ],
  p5: [
    {
      id: "t9",
      date: "2023-09-20",
      procedure: "Dental Cleaning",
      dentist: "Dr. Johnson",
      status: "Completed",
      cost: 120,
      notes: "Regular cleaning, no issues found.",
    },
    {
      id: "t10",
      date: "2023-03-15",
      procedure: "Filling",
      dentist: "Dr. Smith",
      status: "Completed",
      cost: 185,
      notes: "Composite filling on tooth #3.",
    },
  ],
}

// Mock data for patient appointments
const patientAppointments: Record<string, { upcoming: Appointment[]; past: Appointment[] }> = {
  p1: {
    upcoming: [
      {
        id: "a5",
        patientId: "p1",
        patientName: "John Doe",
        patientAvatar: "/placeholder.svg",
        procedure: "Dental Cleaning",
        date: "2024-01-15",
        time: "10:00",
        dentist: "Dr. Smith",
        status: "Confirmed",
        notes: "",
      },
    ],
    past: [
      {
        id: "a6",
        patientId: "p1",
        patientName: "John Doe",
        patientAvatar: "/placeholder.svg",
        procedure: "Dental Cleaning",
        date: "2023-10-12",
        time: "09:30",
        dentist: "Dr. Smith",
        status: "Completed",
        notes: "",
      },
      {
        id: "a7",
        patientId: "p1",
        patientName: "John Doe",
        patientAvatar: "/placeholder.svg",
        procedure: "X-Ray",
        date: "2023-07-05",
        time: "14:00",
        dentist: "Dr. Johnson",
        status: "Completed",
        notes: "",
      },
    ],
  },
  p2: {
    upcoming: [
      {
        id: "a8",
        patientId: "p2",
        patientName: "Jane Smith",
        patientAvatar: "/placeholder.svg",
        procedure: "Crown Check",
        date: "2024-02-10",
        time: "11:30",
        dentist: "Dr. Johnson",
        status: "Confirmed",
        notes: "",
      },
    ],
    past: [
      {
        id: "a9",
        patientId: "p2",
        patientName: "Jane Smith",
        patientAvatar: "/placeholder.svg",
        procedure: "Dental Cleaning",
        date: "2023-11-05",
        time: "10:00",
        dentist: "Dr. Williams",
        status: "Completed",
        notes: "",
      },
    ],
  },
  p3: {
    upcoming: [],
    past: [
      {
        id: "a10",
        patientId: "p3",
        patientName: "Robert Johnson",
        patientAvatar: "/placeholder.svg",
        procedure: "Dental Cleaning",
        date: "2022-08-17",
        time: "13:30",
        dentist: "Dr. Smith",
        status: "Completed",
        notes: "",
      },
    ],
  },
  p4: {
    upcoming: [
      {
        id: "a11",
        patientId: "p4",
        patientName: "Emily Davis",
        patientAvatar: "/placeholder.svg",
        procedure: "Crown",
        date: "2023-12-15",
        time: "14:00",
        dentist: "Dr. Williams",
        status: "Confirmed",
        notes: "",
      },
    ],
    past: [
      {
        id: "a12",
        patientId: "p4",
        patientName: "Emily Davis",
        patientAvatar: "/placeholder.svg",
        procedure: "Root Canal",
        date: "2023-12-01",
        time: "13:00",
        dentist: "Dr. Williams",
        status: "Completed",
        notes: "",
      },
    ],
  },
  p5: {
    upcoming: [
      {
        id: "a13",
        patientId: "p5",
        patientName: "Michael Wilson",
        patientAvatar: "/placeholder.svg",
        procedure: "Dental Cleaning",
        date: "2024-03-20",
        time: "09:00",
        dentist: "Dr. Johnson",
        status: "Pending",
        notes: "",
      },
    ],
    past: [
      {
        id: "a14",
        patientId: "p5",
        patientName: "Michael Wilson",
        patientAvatar: "/placeholder.svg",
        procedure: "Dental Cleaning",
        date: "2023-09-20",
        time: "15:30",
        dentist: "Dr. Johnson",
        status: "Completed",
        notes: "",
      },
    ],
  },
}

// Mock data for inventory items
const inventoryItems: InventoryItem[] = [
  {
    id: "i1",
    name: "Dental Composite",
    category: "Materials",
    supplier: "Dental Depot",
    inStock: 45,
    reorderLevel: 10,
    price: 75.99,
    status: "In Stock",
  },
  {
    id: "i2",
    name: "Examination Gloves",
    category: "PPE",
    supplier: "Medical Supply Co.",
    inStock: 8,
    reorderLevel: 10,
    price: 12.5,
    status: "Low Stock",
  },
  {
    id: "i3",
    name: "Dental Mirrors",
    category: "Instruments",
    supplier: "Dental Innovations",
    inStock: 25,
    reorderLevel: 5,
    price: 8.75,
    status: "In Stock",
  },
  {
    id: "i4",
    name: "Anesthetic Solution",
    category: "Medication",
    supplier: "Healthcare Products",
    inStock: 15,
    reorderLevel: 5,
    price: 45.0,
    status: "In Stock",
  },
  {
    id: "i5",
    name: "Dental Floss (Bulk)",
    category: "Patient Care",
    supplier: "Dental Depot",
    inStock: 30,
    reorderLevel: 10,
    price: 35.25,
    status: "In Stock",
  },
  {
    id: "i6",
    name: "Sterilization Pouches",
    category: "Infection Control",
    supplier: "Medical Supply Co.",
    inStock: 12,
    reorderLevel: 15,
    price: 22.99,
    status: "Low Stock",
  },
  {
    id: "i7",
    name: "Dental Burs",
    category: "Instruments",
    supplier: "Dental Innovations",
    inStock: 40,
    reorderLevel: 10,
    price: 18.5,
    status: "In Stock",
  },
  {
    id: "i8",
    name: "Impression Material",
    category: "Materials",
    supplier: "Dental Depot",
    inStock: 18,
    reorderLevel: 5,
    price: 65.75,
    status: "In Stock",
  },
  {
    id: "i9",
    name: "Face Masks",
    category: "PPE",
    supplier: "Medical Supply Co.",
    inStock: 50,
    reorderLevel: 20,
    price: 9.99,
    status: "In Stock",
  },
  {
    id: "i10",
    name: "Dental X-Ray Films",
    category: "Imaging",
    supplier: "Healthcare Products",
    inStock: 22,
    reorderLevel: 10,
    price: 42.5,
    status: "In Stock",
  },
]

// Data access functions
export function getAllPatients(): Patient[] {
  return patients
}

export function getPatientById(id: string): Patient | undefined {
  return patients.find((patient) => patient.id === id)
}

export function getRecentPatients(): Patient[] {
  return patients.slice(0, 5)
}

export function getTodaysAppointments(): Appointment[] {
  return todaysAppointments
}

export function getAppointmentsByDate(date: Date): Appointment[] {
  // In a real app, this would filter by the actual date
  // For demo purposes, we'll just return today's appointments
  return todaysAppointments
}

export function getPatientTreatmentHistory(patientId: string): TreatmentRecord[] {
  return treatmentHistory[patientId] || []
}

export function getPatientAppointments(patientId: string): { upcoming: Appointment[]; past: Appointment[] } {
  return patientAppointments[patientId] || { upcoming: [], past: [] }
}

export function getInventoryItems(): InventoryItem[] {
  return inventoryItems
}

