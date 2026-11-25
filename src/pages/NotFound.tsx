import { LinkButton } from '../components/links';
import { PageMeta } from '../components/primitives';
import { CtaSection } from '../components/sections';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page not found | Taxonomy Press" description="This page could not be found." />
      <CtaSection kicker="404" title="This page flew off" action={<LinkButton href="/">Back to home</LinkButton>}>
        <p className="body">We couldn't find what you were looking for.</p>
      </CtaSection>
    </>
  );
}
