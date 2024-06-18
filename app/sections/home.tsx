import language from "@/constants/language.json";
import Image from "next/image";
import me from "@/assets/images/me.jpg";
import MainButton from "@/components/buttons/MainButton";

export default function Home() {
  return (
    <>
      <section className="w-full h-full flex flex-col items-center">
        <div className="w-full h-[80%] flex flex-col items-center justify-center">
          <h1 className={`text-3xl text-center mb-[0.5rem] font-serif italic`}>
            {language.english.home.title}
          </h1>
          <h4 className={`text-lg text-center mb-[1rem] font-serif italic`}>
            {language.english.home.subtitle}
          </h4>
          <div className="w-[60%] h-[46%] mt-[1rem] rounded-[50%] overflow-hidden">
            <Image src={me} alt="me" />
          </div>
        </div>
        <div className="w-full h-[10%] flex items-center justify-center">
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
