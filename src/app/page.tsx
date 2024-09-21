import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import lgHero from "@/images/bg-intro-desktop.svg";
import hero from "@/images/bg-intro-mobile.svg"
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between">
            <div className="order-1 order-md-0 ps-md-5 container text-center text-md-start">
              <p className="fs-1 mb-4">Next generation <br/> digital banking</p>
              <p className="text-secondary text-break mb-4">Take your financial life online. Your Easybank account will be a non-stop-shop for spending, saving, budgeting, investing, and much more</p>
              <div className="align-self-center pe-4 pe-lg-5">
                <Link href={"/"} className="btn px-4 py-2 mb-5 bg-primary-gradient rounded-pill text-white"><b>Request Invite</b></Link>
              </div>
            </div>
            <div className="background-container">
              {/* <Image src={lgHero} alt="easybank hero Image" width={2} height={1} className="img-fluid d-none d-md-block w-auto" />
              <Image src={hero} alt="easybank hero Image" width={2} height={1} className="img-fluid d-md-none w-auto" /> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
