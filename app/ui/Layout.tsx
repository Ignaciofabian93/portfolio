export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="w-screen h-screen bg-primary-400 flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}
