"use client";

import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import type { Subject } from "@/models/Subjects";

export default function EditModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingSubject({
      ...editingSubject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Save changes
    onClose();
  };

  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header>
        <p className="text-lg font-normal">Edit Subject</p>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <Label>
            Code:
            <TextInput
              type="text"
              name="code"
              value={editingSubject?.code}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Name:
            <TextInput
              type="text"
              name="name"
              value={editingSubject?.name}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Description:
            <TextInput
              type="text"
              name="description"
              value={editingSubject?.description}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Credits:
            <TextInput
              type="number"
              name="credits"
              value={editingSubject?.credits}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Teacher ID:
            <TextInput
              type="text"
              name="teacher"
              value={editingSubject?.teacher}
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
              Save changes
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
