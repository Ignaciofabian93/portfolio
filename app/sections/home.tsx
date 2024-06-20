import language from "@/constants/language.json";
import Image from "next/image";
import me from "@/assets/images/me.jpg";
import linkedin from "@/assets/icons/linkedin.png";
import youtube from "@/assets/icons/youtube.png";
import styles from "./styles.module.css";
import { CustomSubtitle, CustomTitle } from "@/components/text/CustomText";
import { MainButton } from "@/components/buttons/Buttons";
import Link from "next/link";
import { useRouter } from "next/navigation";

type HomeProps = {
  redirect: (page: number) => void;
};

export default function Home({ redirect }: HomeProps) {
  return (
    <>
      <div className={styles.home_container}>
        <div className={styles.home_header}>
          <CustomTitle text={language.english.home.title} />
          <CustomSubtitle text={language.english.home.subtitle} />
          <div className="w-[25%] h-fit flex items-center justify-between mt-[1rem]">
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/ignacio-rodr%C3%ADguez-rulas-9553b21a2/"
              }
            >
              <Image
                src={linkedin}
                alt="linkedin"
                className={styles.home_icon}
              />
            </Link>
            <Link href={"https://www.youtube.com/@console.coding/videos"}>
              <Image src={youtube} alt="youtube" className={styles.home_icon} />
            </Link>
          </div>
        </div>
        <div className={styles.home_image_container}>
          <Image src={me} alt="me" />
        </div>
        <div className={styles.home_buttons}>
          <MainButton
            text={language.english.home.cv_button}
            onClick={() => {}}
            type="primary"
          />
          <MainButton
            text={language.english.home.contact_button}
            onClick={() => redirect(5)}
            type="secondary"
          />
        </div>
      </div>
    </>
  );
}
