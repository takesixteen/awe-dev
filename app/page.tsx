import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[200vh] flex-col items-center bg-neutral-400">
        <h1 className="mt-[100px] ">Wassup Big Dog</h1>
      </main>
    </>
  );
}
