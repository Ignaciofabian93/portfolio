import styles from "./styles.module.css";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  type: "primary" | "secondary";
};

export function MainButton({ text, type, onClick }: ButtonProps) {
  return (
    <>
      <button id="main_button" onClick={onClick} className={styles[type]}>
        {text}
      </button>
    </>
  );
}

export function PrimaryButton({ text, onClick }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-primary text-secondary-500 min-w-[110px] h-[40px] rounded-[8px] cursor-pointer"
      >
        <span className="text-sm">{text}</span>
      </button>
    </>
  );
}

export const SecondaryButton = ({ text, onClick }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick} className="bg-secondary">
        {text}
      </button>
    </>
  );
};
