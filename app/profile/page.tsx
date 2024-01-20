import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/profile");
  }

  return (
    <>
      <Header />
      <section className="py-24">
        <div className="container">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
