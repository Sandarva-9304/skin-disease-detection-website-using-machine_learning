// import Image from "next/image";
import Header from "@/components/component/Header";
import Main from "@/components/component/Main";
import Footer from "@/components/component/Footer";
// import { Component } from "@/components/component/component";
export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
