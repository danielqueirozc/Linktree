import { Header } from "@/components/header/Header";
import { RedesSociais } from "@/components/redessociais/RedesSociais";

export default function Home() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <RedesSociais />
      <div className="h-[4000px]"></div>
    </div>

  )
}
