import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main>
      <h1 className={"text-2xl font-extrabold pb-3"}>
        {dictionary.bio.header}
      </h1>
      <h5>{dictionary.bio.welcome}</h5>
    </main>
  );
}
