import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="py-24 h-screen">
        <div className="container">
          <h1 className="text-2xl font-semibold tracking-tight">Home page</h1>
        </div>
      </section>
      <Footer />
    </>
  );
}
