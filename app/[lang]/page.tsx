import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionary";

export default async function IndexCretara({
                                               params: {lang},
                                           }: {
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang)

    return (
        <main>
            <h1>This is Cretara.dev site</h1>
            <h2>{dictionary.home.test}</h2>
        </main>
    )
}
