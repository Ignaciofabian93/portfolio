export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-screen h-screen flex flex-col items-center justify-center bg-black-100">
        {children}
      </main>
    </>
  );
}
