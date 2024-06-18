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
        } h-[46px] px-[16px] rounded-[8px] w-fit min-w-[110px] text-[14px] cursor-pointer mx-[8px]`}
        {...rest}
      >
        {text}
      </button>
    </>
  );
}
