import { PageSection } from '@components/shared/PageSection';
import { RichText } from '@components/shared/RichText';
import { Typography } from '@components/shared/Typography';
import { AboutHeroStoryblok } from '../../types/component-types-sb';

export type TAboutHeroProps = {
  blok: AboutHeroStoryblok;
};
export const AboutHero = ({ blok }: TAboutHeroProps) => (
  <PageSection className="border-t-0">
    <div className="max-w-[80%] mx-auto md:mb-10">
      <Typography variant="h2" className="text-center" font="fjalla">
        {blok.title}
      </Typography>
    </div>
    <div className="flex flex-col md:flex-row md:gap-5  max-w-[80%] mx-auto">
      {blok.profile && (
        <img className="mb-10 md:mb-0" src={blok.profile.filename} alt="" />
      )}
      <div>
        <div className="mb-10 md:mb-5">
          <RichText document={blok.subTitle} />
        </div>
        <div className="text-lg font-light">
          <RichText document={blok.copy} />
        </div>
      </div>
    </div>
  </PageSection>
);
