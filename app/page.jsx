import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <><body className="bg-image gap-4 grid place-items-center">
      
        <div className=" w-[300px] h-[300px] rounded-md space-x-5  pl-14 pt-28  mt-60 backdrop-blur border-2 border-gray-500 ">
        <Link href="/login" class="group  btn undefined">
                    <span className="border-2 p-2 rounded-xl bold text-black text-xl text-black border-black w-30 h-30 relative inline-flex overflow-hidden  ">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20 group-hover:skew-y-12">
                        Login
                      </div>
                      <div className="absolute translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                       Login
                      </div>
                    </span>
                  </Link>
                  <Link href="/register" class="group  btn undefined">
                    <span className="border-2 p-2 rounded-xl bold text-black text-xl text-black border-black w-30 h-30 relative inline-flex overflow-hidden  ">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20 group-hover:skew-y-12">
                        Register
                      </div>
                      <div className="absolute translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      Register
                      </div>
                    </span>
                  </Link>
        </div>
    </body>
    </>
  );
}
