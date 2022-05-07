import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About DevBlog">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>
      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">DevBlog</h3>
        <p className="mb-3">Just another NextJS static blog.</p>
        <p className="font-bold">Version 1.0.0</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
