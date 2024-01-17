"use client";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Subject } from "@/models/Subjects";
import { useState } from "react";

import CreateModal from "@/components/CreateModal";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";

export default function SubjectsTable({ subjects }: { subjects: Subject[] }) {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <Table striped>
        <TableHead>
          <TableHeadCell>Code</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Credits</TableHeadCell>
          <TableHeadCell>Created At</TableHeadCell>
          <TableHeadCell>Updated At</TableHeadCell>
          <TableHeadCell>Teacher ID</TableHeadCell>
          <TableHeadCell>
            Actions{" "}
            <Button onClick={() => setOpenCreateModal(true)}>
              <svg
                className="w-3 h-3 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
              </svg>
            </Button>
          </TableHeadCell>
        </TableHead>
        <TableBody>
          {subjects.map((subject: Subject) => (
            <TableRow key={subject.id}>
              <TableCell>{subject.code}</TableCell>
              <TableCell>{subject.name}</TableCell>
              <TableCell>{subject.description}</TableCell>
              <TableCell>{subject.credits}</TableCell>
              <TableCell>
                {subject.created_at &&
                  new Date(subject.created_at).toDateString()}
              </TableCell>
              <TableCell>
                {subject.updated_at &&
                  new Date(subject.updated_at).toDateString()}
              </TableCell>
              <TableCell>{subject.teacher_id}</TableCell>
              <TableCell className="grid gap-1 grid-cols-2 text-white">
                <Button onClick={() => setOpenEditModal(true)}>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                  </svg>
                </Button>
                <Button onClick={() => setOpenDeleteModal(true)}>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                  </svg>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CreateModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
      />
      <EditModal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
      />
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
      />
    </>
  );
}
