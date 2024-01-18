"use client";

import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import type { Subject } from "@/models/Subjects";

export default function CreateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [newSubject, setNewSubject] = useState<Subject>({
    code: "",
    name: "",
    description: "",
    credits: 0,
    created_at: new Date(),
    teacher: "",
  });

  if (!isOpen) return;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSubject({
      ...newSubject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch(`https://test-vercel-seven-teal.vercel.app/subject`, {
      method: "POST",
      body: JSON.stringify(newSubject),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        onClose();
      })
      .catch(console.error);
  };

  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header>
        <p className="text-lg font-normal">Create Subject</p>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <Label>
            Code:
            <TextInput
              type="text"
              name="code"
              value={newSubject.code}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Name:
            <TextInput
              type="text"
              name="name"
              value={newSubject.name}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Description:
            <TextInput
              type="text"
              name="description"
              value={newSubject.description}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Credits:
            <TextInput
              type="number"
              name="credits"
              value={newSubject.credits}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Teacher:
            <TextInput
              type="text"
              name="teacher"
              value={newSubject.teacher}
              onChange={handleInputChange}
            />
          </Label>
          <div className="flex justify-center gap-4 mt-4">
            <Button type="submit" color="success">
              Save
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
