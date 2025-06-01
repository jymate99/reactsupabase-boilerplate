import { Button } from "@/app/ui/button";
import Link from "next/link";
import Price from "./components/subscription/price";


export default function Home() {
  return (
    <div>
      <Button className="text-white flex ">Hello World!</Button>

      <Button className="flex mt-3">
        <Link href='/dashboard' className=" text-white ">Dashboard</Link>
      </Button>

      <Button className="flex mt-3">
        <Link href='/private' className=" text-white ">Profile</Link>
        </Button>
      <Price/>
    </div>
  );
}
