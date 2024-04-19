import { TopNavigation } from "@/app/ui/header/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm ">
        <TopNavigation />
      </div>
    </main>
  );
}
