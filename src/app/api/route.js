import { NextResponse } from "next/server";

const subjects = [
  {
    code: "MATH-101",
    name: "Mathematics",
    description: "Mathematics",
    credits: 3,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "John Doe",
  },
  {
    code: "PHYS-101",
    name: "Physics",
    description: "Physics",
    credits: 4,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "Jane Doe",
  },
  {
    code: "CHEM-101",
    name: "Chemistry",
    description: "Chemistry",
    credits: 4,
    created_at: new Date(),
    updated_at: new Date(),
    teacher: "John Doe",
  },
];

export async function GET() {
  return NextResponse.json(subjects);
}

export async function POST(request) {
  const newSubject = await request.json();
  if (subjects.find((subject) => subject.code === newSubject.code)) {
    return NextResponse.json(
      { error: "Subject already exists" },
      { status: 400 }
    );
  }
  subjects.push(newSubject);
  return NextResponse.json(newSubject);
}

export async function DELETE(request) {
  const { code } = await request.json();
  const index = subjects.findIndex((subject) => subject.code === code);
  if (index !== -1) {
    const deletedSubject = subjects.splice(index, 1)[0];
    return NextResponse.json(deletedSubject);
  } else {
    return NextResponse.json({ error: "Subject not found" }, { status: 404 });
  }
}
