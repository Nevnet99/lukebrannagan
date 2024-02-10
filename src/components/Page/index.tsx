import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { PageStoryblok } from '../../types/component-types-sb';

export type TPageProps = {
  blok: PageStoryblok;
};

export const Page = ({ blok }: TPageProps) => {
  const { components } = blok;

  if (!components) {
    return <p>Please add components to the page</p>;
  }

  return (
    <main {...storyblokEditable(blok)}>
      {components.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
