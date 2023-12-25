import Image from 'next/image';

export const BrandIdentifier = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <main className="flex h-screen max-w-max mx-auto px-4 md:ml-32 lg:mx-auto">
    <section className="h-screen w-full max-w-max md:min-w-[537px] md:pr-48 xl:pr-64 flex flex-col justify-center rounded-[36px] md:border-r">
      {children}
    </section>

    <section className="hidden md:flex justify-center items-center">
      <div className="delay-[3500] animate-fall group flex relative items-center py-[20px] -left-[73px] bg-[#F7F7F7] hover:-translate-y-3 transition-transform ease-in-out duration-300">
        <Image
          src="/images/logo.png"
          width={130}
          height={33}
          alt="SheCodesVietnam Logo"
        />
        <h2 className="ml-3 pb-2 font-manrope font-light md:text-body-lg xl:text-heading">
          Bridge to knowledge
        </h2>
      </div>
    </section>
  </main>
);
