import language from "@/constants/language.json";
import Image from "next/image";
import me from "@/assets/images/me.jpg";
import MainButton from "@/components/buttons/MainButton";
import { colors } from "@/constants/colors";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <section className={`${styles.container}`}>
        <div className="w-full flex flex-col items-center">
          {/* <div className="w-[40%] h-[35%] rounded-[50%] overflow-hidden">
            <Image src={me} alt="me" />
          </div> */}
          <h1 className={`text-3xl text-center mb-[5%]`}>
            {language.english.home.title}
          </h1>
          <h4 className={`text-xl text-center mb-[3%]`}>
            {language.english.home.subtitle}
          </h4>
        </div>
        <div className="mt-[20%]">
          <MainButton text={language.english.home.home_button} type="primary" />
        </div>
      </section>
    </>
  );
}
