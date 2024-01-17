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
  if (!isOpen) return null;

  const [newSubject, setNewSubject] = useState<Subject>({
    id: 1,
    code: "",
    name: "",
    description: "",
    credits: 0,
    created_at: new Date(),
    updated_at: new Date(),
    teacher_id: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewSubject({
      ...newSubject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header>
        <h2 className="text-lg font-normal">Create Subject</h2>
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
            Teacher ID:
            <TextInput
              type="number"
              name="teacher_id"
              value={newSubject.teacher_id}
              onChange={handleInputChange}
            />
          </Label>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              type="submit"
              color="success"
              onClick={() => {
                // TODO: Save changes
                onClose();
              }}
            >
              Create
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
