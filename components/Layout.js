import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "DevBlog",
  keywords: "coding, blogging, developmenet",
  description: "Your dev blog",
};

export default Layout;
