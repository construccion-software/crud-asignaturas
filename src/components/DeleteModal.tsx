"use client";

import { Button, Modal } from "flowbite-react";

export default function DeleteModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal">
            Are you sure you want to delete this subject?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="failure"
              onClick={() => {
                onClose();
              }}
            >
              Yes, I'm sure
            </Button>
            <Button color="gray" onClick={onClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
