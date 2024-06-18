import styles from "./styles.module.css";

type MainButtonProps = {
  text: string;
  type?: "primary" | "secondary" | "warning" | "info";
};

export default function MainButton({
  text,
  type = "primary",
  ...rest
}: MainButtonProps) {
  return (
    <>
      <button
        className={`${
          styles[type!]
        } h-[48px] px-[16px] rounded-[8px] w-fit text-[16px] cursor-pointer`}
        {...rest}
      >
        {text}
      </button>
    </>
  );
}
