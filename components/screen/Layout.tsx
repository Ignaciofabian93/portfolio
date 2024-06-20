export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="py-[1rem] px-[2rem]">{children}</section>
    </>
  );
}
