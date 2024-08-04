import { Card } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
export default function MyCard({ heading, para, imgLink }) {

  <HashLink to={"/readmore"}></HashLink>

  return (
    <Card className="   h-fit rounded-xl lg:max-w-[500px]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white text-center mb-2">
        {heading}
      </h5>
      <div className="flex flex-col  justify-between gap-4 max-md:gap-8 items-center">
        <img src={imgLink} className="w-80 h-80 max-md:w-40 max-md:h-40 rounded-md" />
        <p className="font-normal text-gray-600 dark:text-gray-400 px-8 py-2 text-justify">
          {para}
        </p>
      </div>
    </Card>
  );
}
