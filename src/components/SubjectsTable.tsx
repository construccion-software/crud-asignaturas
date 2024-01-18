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
import { useEffect, useState } from "react";

import CreateModal from "@/components/CreateModal";
// import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";

export default function SubjectsTable({ subjects }: { subjects: Subject[] }) {
  const [subjectsList, setSubjectsList] = useState<Subject[]>(subjects);

  useEffect(() => {
    setSubjectsList(subjects);
  }, [subjects]);

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleCreateModal = () => {
    setOpenCreateModal(false);
  };
  const handleDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = (code: string | undefined) => {
    localStorage.setItem("codeToDelete", code || "");
    setOpenDeleteModal(true);
  };

  return (
    <>
      <h1 className="flex justify-center items-center pb-3">
        <Button onClick={() => setOpenCreateModal(true)}>
          <p className="pr-3">Create Subject</p>
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
      </h1>
      <Table striped>
        <TableHead>
          <TableHeadCell>Code</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Credits</TableHeadCell>
          <TableHeadCell>Created At</TableHeadCell>
          <TableHeadCell>Teacher</TableHeadCell>
          <TableHeadCell>Actions</TableHeadCell>
        </TableHead>
        <TableBody>
          {subjectsList.map((subject: Subject) => (
            <TableRow key={subject.code}>
              <TableCell>{subject.code}</TableCell>
              <TableCell>{subject.name}</TableCell>
              <TableCell>{subject.description}</TableCell>
              <TableCell>{subject.credits}</TableCell>
              <TableCell>
                {subject.created_at &&
                  new Date(subject.created_at).toDateString()}
              </TableCell>
              <TableCell>{subject.teacher}</TableCell>
              <TableCell>
                <Button
                  color="warning"
                  className="text-white"
                  onClick={() => handleOpenDeleteModal(subject.code)}
                >
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
      <CreateModal isOpen={openCreateModal} onClose={handleCreateModal} />
      <DeleteModal isOpen={openDeleteModal} onClose={handleDeleteModal} />
    </>
  );
}
