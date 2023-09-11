import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-20">
        <Intro />
        <Portfolio/>
        <About/>
        <Team/>
        <Footer/>
      </div>
    </main>
  )
}
