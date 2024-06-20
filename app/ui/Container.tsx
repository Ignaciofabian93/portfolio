export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="w-[90%] h-[90%] bg-primary-500/60 custom_shadow rounded-[8px] px-[1rem] py-[0.5rem]">
        {children}
      </section>
    </>
  );
}
