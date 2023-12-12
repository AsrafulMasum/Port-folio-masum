

const Education = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-20">
      <h2 className="text-center text-7xl mb-10">Education</h2>
      <div className="grid grid-cols-2 gap-12">

        <div className="flex flex-col gap-2 bg-slate-500 px-8 py-4 rounded-sm hover:scale-110 hover:bg-orange-500 duration-1000 text-white">
          <h2 className="font-bold">B.Sc in Computer Science & Engineering</h2>
          <h4 className="font-extralight">Daffodil International University</h4>
          <div className="flex gap-5">
          <p className="font-extralight">Year : 2017 - 2021</p>
          <p>| |</p>
          <p className="font-extralight">CGPG : 3.00</p>
          </div>
          <p>Location : Dhanmondi, Dhaka, BanglaDesh</p>
        </div>

        <div className="flex flex-col gap-2 bg-slate-500 px-8 py-4 rounded-sm hover:scale-110 hover:bg-orange-500 duration-1000 text-white">
          <h2 className="font-bold">Higher Secondary</h2>
          <h4 className="font-extralight">Shaheed Police smrity College</h4>
          <div className="flex gap-5">
          <p className="font-extralight">Year : 2014 - 2016</p>
          <p>| |</p>
          <p className="font-extralight">GPG : 4.75</p>
          </div>
          <p>Location : Mirpur-14, Dhaka, BanglaDesh</p>
        </div>

        <div className="flex flex-col gap-2 bg-slate-500 px-8 py-4 rounded-sm hover:scale-110 hover:bg-orange-500 duration-1000 text-white">
          <h2 className="font-bold">Secondary</h2>
          <h4 className="font-extralight">Vashantek High School</h4>
          <div className="flex gap-5">
          <p className="font-extralight">Year : 2004 - 2014</p>
          <p>| |</p>
          <p className="font-extralight">CGPG : 4.88</p>
          </div>
          <p>Location : Dhaka-Cant., Dhaka, BanglaDesh</p>
        </div>

      </div>
    </div>
  );
};

export default Education;