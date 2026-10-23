import { Container, Eyebrow, Heading, ButtonLink } from "@/components/v2/ui";
import { href } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function NotFound() {
  const locale = await getLocale();
  const { notFound } = await getDictionary();
  return (
    <section className="bg-paper py-24 lg:py-32">
      {/* notFound() skips the page's metadata, so the tab title is set here. */}
      <title>{`${notFound.title} | SBP Management`}</title>
      <Container>
        <Eyebrow>{notFound.eyebrow}</Eyebrow>
        <Heading as="h1">{notFound.title}</Heading>
        <p className="mt-6 max-w-[40rem] text-[1.125rem] leading-relaxed">
          {notFound.body}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={href(locale, "home")}>{notFound.home}</ButtonLink>
          <ButtonLink href={href(locale, "contact")} variant="outline">
            {notFound.contact}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
