import Header from "@/components/header/header";
import InputButton from "@/components/input-button/input-button";
import Logo from "@/components/logo/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="dark:bg-black bg-dot-white/[0.07] min-h-screen flex flex-col bg-black">
      <Header />
      <section className="flex flex-col items-center justify-center flex-grow -mt-32">
        <div className="min-w-full p-5 mt-0 flex flex-col items-center">
          <div className="py-5 mb-6">
            <Logo />
          </div>
          {/* <div className="py-2 w-1/2">
            <Input />
          </div> */}
          <div className="py-2 w-1/2">
            <InputButton />
          </div>
          <div className="py-2 w-1/2">
            <Button variant={"outline"} className="min-w-full">
              Shorten
            </Button>
          </div>
        </div>
        <div className="glow absolute top-[40%]"></div>
      </section>
    </main>
  );
}
