import language from "@/constants/language.json";
import Image from "next/image";
import me from "@/assets/images/me.jpg";
import MainButton from "@/components/buttons/MainButton";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.home_container}>
        <div className={styles.home_header}>
          <div className={styles.home_text}>
            <h1
              className={`text-4xl text-center mb-[0.5rem] font-serif italic`}
            >
              {language.english.home.title}
            </h1>
            <h4 className={`text-lg text-center mb-[1rem] font-serif italic`}>
              {language.english.home.subtitle}
            </h4>
          </div>
          <div className={styles.home_image}>
            <Image src={me} alt="me" />
          </div>
        </div>
        <div className={styles.home_buttons}>
          <MainButton text={language.english.home.cv_button} type="primary" />
          <MainButton
            text={language.english.home.contact_button}
            type="secondary"
          />
        </div>
      </section>
    </>
  );
}
