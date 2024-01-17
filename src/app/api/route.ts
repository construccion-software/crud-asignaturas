import type { Subject } from "@/models/Subjects";
import { NextRequest, NextResponse } from "next/server";

const subjects: Subject[] = [
  {
    id: 1,
    code: "MATH-101",
    name: "Mathematics",
    description: "Mathematics",
    credits: 3,
    created_at: new Date(),
    updated_at: new Date(),
    teacher_id: 1,
  },
  {
    id: 2,
    code: "PHYS-101",
    name: "Physics",
    description: "Physics",
    credits: 3,
    created_at: new Date(),
    updated_at: new Date(),
    teacher_id: 2,
  },
  {
    id: 3,
    code: "CHEM-101",
    name: "Chemistry",
    description: "Chemistry",
    credits: 3,
    created_at: new Date(),
    updated_at: new Date(),
    teacher_id: 3,
  },
];

export async function GET(request: NextRequest) {
  return NextResponse.json(subjects);
}
