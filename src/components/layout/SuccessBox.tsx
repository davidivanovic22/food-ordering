import { FC, ReactNode } from "react";

interface SuccessBoxProps {
  children: ReactNode
}

const SuccessBox: FC<SuccessBoxProps> = ({children}) => {
  return (
    <div className="text-center bg-green-100 p-4 rounded-lg border border-green-300">
      {children}
    </div>
  );
}

export default SuccessBox