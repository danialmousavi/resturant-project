import About from "@/components/AboutSection/About";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/modules/Features/Featurse";
import FoodSections from "@/components/modules/ProductsTab/FoodSections";
import { GetFetch } from "@/utils/services/fetcher";

export default async function Home() {
      const data=await GetFetch("products/products-tabs");
      console.log("data",data);
      
  return (
    <>
      <Features />
      <FoodSections tabList={data.tabList} tabPanel={data.tabPanel}/>
      <About/>
      <Contact/>
    </>
  );
}
