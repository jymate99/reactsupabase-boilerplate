import { Button } from "@/app/ui/button";
import Link from "next/link";
import Price from "./components/subscription/price";



export default function Home() {
  return (
    <div>
    <div className="flex">
      <Button className="text-white mt-3 ml-3">Hello World!</Button>

      <Button className="flex mt-3 ml-3">
        <Link href='/dashboard' className=" text-white ">Dashboard</Link>
      </Button>

      <Button className="flex mt-3 ml-3">
        <Link href='/private' className=" text-white ">Profile</Link>
        </Button>
      <Button className="flex mt-3 ml-3">
        <Link href='/subscription' className=" text-white ">Price</Link>
        </Button>
      {/* <Price/> */}
    </div>
    </div>
  );
}
