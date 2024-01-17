import { Subject } from "@/models/Subjects";

import SubjectsTable from "@/components/SubjectsTable";

async function getSubjects() {
  const res = await fetch("http://localhost:3000/api");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Home() {
  const subjects: Subject[] = await getSubjects();

  return (
    <main className="bg-slate-950 w-full h-screen flex flex-col justify-center items-center text-white overflow-x-auto">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-3xl px-3">CRUD Subjects</h1>
      </div>
      <hr className="border-1 border-white w-96 my-6" />
      <div className="container">
        <SubjectsTable subjects={subjects} />
      </div>
    </main>
  );
}
