import Layout from "@/components/screen/Layout";
import { CustomTitle } from "@/components/text/CustomText";
import language from "@/constants/language.json";

export default function Skills() {
  return (
    <>
      <Layout>
        <CustomTitle text={language.english.skills.title} />
      </Layout>
    </>
  );
}
