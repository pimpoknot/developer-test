import { ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export function SubmitButton({
  isLoading,
  ...props
}: {
  isLoading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}) {

  return (
    <Button  className="w-full font-mono  bg-violet-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded mt-4">
      {isLoading ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          {" Please wait..."}
        </>
      ) : (
        props.children
      )}
    </Button>
  );
}
