export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  dateOfBirth: string
  status: "Active" | "Inactive" | "New"
  lastVisit: string
  avatar: string
  insurance?: {
    provider: string
    policyNumber: string
    groupNumber: string
  }
  medicalHistory?: {
    allergies: string[]
    medications: string[]
    conditions: string[]
  }
  notes?: string
}

export interface Appointment {
  id: string
  patientId: string
  patientName: string
  patientAvatar: string
  procedure: string
  date: string
  time: string
  dentist: string
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled"
  notes: string
}

export interface TreatmentRecord {
  id: string
  date: string
  procedure: string
  dentist: string
  status: "Completed" | "Scheduled" | "Cancelled"
  cost: number
  notes: string
}

export interface InventoryItem {
  id: string
  name: string
  category: string
  supplier: string
  inStock: number
  reorderLevel: number
  price: number
  status: "In Stock" | "Low Stock" | "Out of Stock"
}

