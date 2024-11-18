"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const trainers = ["John Doe", "Jane Smith", "Emily Davis"]; // Mock data for trainers
const courses = ["Web Development", "App Development", "Python"]; // Mock data for courses
const statuses = ["pending", "completed", "ongoing", "merged"]; // Status options

export function BatchModal() {
  const [batchName, setBatchName] = useState("");
  const [status, setStatus] = useState("");
  const [trainer, setTrainer] = useState("");
  const [students, setStudents] = useState("");
  const [course, setCourse] = useState("");

  const handleSave = () => {
    // Handle form submission (e.g., save data)
    console.log({ batchName, status, trainer, students, course });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Batch</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Batch</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          {/* Batch Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Batch Name</label>
            <Input
              placeholder="Enter batch name"
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
            />
          </div>
          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <Select onValueChange={setStatus} value={status}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Trainer */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Trainer</label>
            <Select onValueChange={setTrainer} value={trainer}>
              <SelectTrigger>
                <SelectValue placeholder="Select trainer" />
              </SelectTrigger>
              <SelectContent>
                {trainers.map((trainer) => (
                  <SelectItem key={trainer} value={trainer}>
                    {trainer}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Number of Students */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Students</label>
            <Input
              type="number"
              placeholder="Enter number of students"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
            />
          </div>
          {/* Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Course</label>
            <Select onValueChange={setCourse} value={course}>
              <SelectTrigger>
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Save Button */}
          <Button type="button" variant="primary" onClick={handleSave} className="w-full">
            Save Batch
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
