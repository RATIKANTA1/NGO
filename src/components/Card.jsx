import { Button, Card } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
export default function MyCard({heading,para}) {
    
      <HashLink to={"/readmore"}></HashLink>
    
  return (
    <Card className="max-w-sm max-h-sm rounded-xl">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center mb-2">
       {heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {para}
      </p>
      <HashLink to={"/readmore"} className="px-5 py-3 mt-10 bg-purple-500 rounded-2xl text-center">
       <span>Read more</span>
       
      </HashLink>
    </Card>
  );
}
