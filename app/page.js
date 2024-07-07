import { Tab } from "@nextui-org/react";
import Image from "next/image";

export const metadata = {
  title: 'Alex Mezera: Software Engineering',
  description: 'Alex Mezera Personal Page',
  icons: {
    icon: '/icon.ico',
  },
};

export default function Home() {
  return (
    <container className="flex flex-col min-h-lvh shrink:1 w-4/5 md:w-2/5 mx-auto py-16 items-stretch">
      <div className="self-center">
        <h1 className="text-center text-xl font-bold">Alex Mezera</h1>
        <h3 className="text-center">Software Engineering</h3>
      </div>
      <div className="">
        <Image className="float-right px-4 py-6 block"
          src="/images/OakClimb.jpg"
          width={192}
          height={200}
          alt="The author climbing an oak tree"
        />
        <ParaBox text = {
          `Yep, that's me to the right: the small figure in the middle of the image, sitting \
          on the branch, climbing trees for a living. So how did I get from there to computing? That's less \
          complicated than it might seem. I started playing with Linux in high school, \
          and loved the freedom that open source software gave to learn and modify programs. \
          I took that curiosity with me into the professional world; however, I found myself learning about \
          organic trees, rather than AVL trees. Then, I injured my shoulder. \
          Oops! So, I returned to computers.`} />
      </div>
      <ParaBox text = {
        `I've spent the last year completing UW-Madison's Computer Sciences for Professionals capstone.\
        It's a unique program that I found immensely valuable: consisting of several undergrad-level CS\
        courses, the program gives a great understanding of not only programming, but both lower-level \
        machine programming knowledge and opportunities to learn and implement\
         higher-level software\ 
        engineering concepts.`} />
      <ParaBox text = {
        `If you found this site from an application, thanks for reading! Hopefully this gave you some
        more background on who I am and what I can bring to your team. If you found me through word of mouth,
        that's awesome! Either way, I'd love to hear from you via LinkedIn. `}
      />
    </container>
  );
}

function ParaBox ({ text }) {
  return(
          <div className="p-6">
              <div>{text}</div>
          </div>
  );
}