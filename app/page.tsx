import Home from "@/components/viewer/Home";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'home',
  description: 'Generated by create next app',
}

export default async function Page() {
  return <Home/>
}
