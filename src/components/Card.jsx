import { Card } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
export default function MyCard({ heading, para, imgLink }) {

  <HashLink to={"/readmore"}></HashLink>

  return (
    <Card className="   h-fit rounded-xl lg:max-w-[600px]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white text-center mb-2">
        {heading}
      </h5>
      <div className="flex lg:flex-col flex-row  justify-between gap-4 max-md:gap-8 items-center">
        <img src={imgLink} className="w-80 h-80 max-md:w-40 max-md:h-40 rounded-md" />
        <p className="font-normal text-gray-600 dark:text-gray-400 ">
          {para}
        </p>
      </div>
      <HashLink to={"/readmore"} className="mt-10 btn-primary text-center">
        <span>Read more</span>
      </HashLink>
    </Card>
  );
}
