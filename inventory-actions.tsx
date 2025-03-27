"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react"

export default function InventoryActions() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          <span>Add Item</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Inventory Item</DialogTitle>
          <DialogDescription>Add a new item to your inventory.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Item Name</Label>
            <Input id="name" placeholder="Enter item name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instruments">Instruments</SelectItem>
                <SelectItem value="materials">Materials</SelectItem>
                <SelectItem value="medication">Medication</SelectItem>
                <SelectItem value="office">Office Supplies</SelectItem>
                <SelectItem value="ppe">PPE</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="supplier">Supplier</Label>
            <Select>
              <SelectTrigger id="supplier">
                <SelectValue placeholder="Select supplier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dental-depot">Dental Depot</SelectItem>
                <SelectItem value="medical-supply-co">Medical Supply Co.</SelectItem>
                <SelectItem value="healthcare-products">Healthcare Products</SelectItem>
                <SelectItem value="dental-innovations">Dental Innovations</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" type="number" min="0" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price per Unit</Label>
              <Input id="price" type="number" min="0" step="0.01" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="reorder-level">Reorder Level</Label>
            <Input id="reorder-level" type="number" min="0" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Add Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

