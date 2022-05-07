import Layout from "@/components/Layout";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          className="bg-gray-800 rounded-2xl"
          alt="logo"
        />
        <h1 className="text-6xl my-5">404</h1>
        <h2 className="text-4xl text-gray-400 mb-5">Page does not exist</h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
