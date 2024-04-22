import { TopNavigation } from "@/app/ui/header/Nav";
import CalendlyDynamic from "@/app/ui/calendly/calendlydynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center text-sm ">
        <TopNavigation />
        <div>
          <CalendlyDynamic />
          <div className="" id="cal_id"></div>
        </div>
      </div>
    </main>
  );
}
