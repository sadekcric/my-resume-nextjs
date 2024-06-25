import Headers from "@/components/Headers";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Headers />
      <Project />
      <Skills />
    </main>
  );
}
