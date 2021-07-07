import { useRouter } from "next/router";

const CollegeLogo = ({ name }) => {
  let router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/dashboard");
      }}
      className="hover:cursor-pointer flex items-center justify-center ml-3 h-full w-max text-center text-2xl font-semibold text-white uppercase"
    >
      {name}
    </div>
  );
};

export default CollegeLogo;
