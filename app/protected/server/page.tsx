import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/protected/server");
  }

  return (
    <>
      <Header />
      <section className="py-24">
        <div className="container">
          <h1 className="text-2xl font-bold">
            This is a <span className="text-emerald-500">server-side</span>{" "}
            protected page
          </h1>
          <h2 className="mt-4 font-medium">You are logged in as:</h2>
          <p className="mt-4">{session?.user?.name}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServerProtectedPage;
