import {
  storyblokEditable,
  StoryblokComponent,
  ISbStoryData,
} from '@storyblok/react/rsc';
import { PageStoryblok } from '../../types/component-types-sb';

export const Page = ({ blok }: { blok: PageStoryblok }) => {
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
