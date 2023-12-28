import Navbar from "@/components/navbar/Navbar";
import HeaderInformation from "@/components/HeaderInformation";

export default function Home() {
  return (
    <>
      <HeaderInformation />
      <Navbar />
      <main className="min-h-[200vh] bg-neutral-400">Wassup Big Dog</main>
    </>
  );
}
