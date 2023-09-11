import { members } from "@/lib/data";
import Image from "next/image";

const Team = () => {
  return (
    <div className="px-[2rem] lg:px-[12rem] bg-[#f8fdfd] py-20 w-full" id='team'>
      <h1 className="text-[2.5rem] text-center leading-[4rem] text-shadow-sm font-[800] tracking-widest py-2">
        My Team
      </h1>
      <p className="text-center">
        My team and i work remotely using agile project management approach to ensure we meet your needs.
      </p>
      <div className="flex items-stretch mt-14 flex-wrap">
        {
          members.map((mem, i) =>
            <div key={i} className="md:w-1/4 w-full sm:w-1/2 mb-14 px-3">
              <div className="rounded-3xl shadow-lg bg-white text-center border">
                <Image src={mem.image} alt='' height={500} width={500} className="rounded-[2rem]" />
                <div className="mt-3 mb-4">
                  <h3 className="text-xl font-[500]">{mem.name}</h3>
                  <p className="mt-2">{mem.role}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Team;
