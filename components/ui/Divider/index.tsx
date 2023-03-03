import { ReactNode } from 'react';

const Divider = ({ children }: { children: ReactNode }) => (
  <div className="mb-4 mt-6 flex flex-col">
    <hr className="h-0 border-t" />
    <h4 className="-mt-2 px-3 self-center bg-[#F7F7F7] font-manrope text-gray-600 text-caption">
      {children}
    </h4>
  </div>
);

export default Divider;
