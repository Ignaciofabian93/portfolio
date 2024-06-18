import styles from "./styles.module.css";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="container">{children}</main>
    </>
  );
}
