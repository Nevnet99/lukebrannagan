import { PageSection } from '@components/shared/PageSection';
import { HalfAndHalfImageStoryblok } from '../../types/component-types-sb';

export type THalfAndHalfImage = {
  blok: HalfAndHalfImageStoryblok;
};
export const HalfAndHalfImage = ({ blok }: THalfAndHalfImage) => {
  const { image1, image2, flavourImage } = blok;

  return (
    <PageSection className="border-t-0 pt-10" variant="noPaddingTop">
      <div className=" max-w-[80%] mx-auto ">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 drop-shadow-neo-brutalist">
            <img src={image1.filename} alt={image1.alt} />
          </div>
          <div className="relative w-full md:w-1/2 md:h-fit">
            <img
              className="drop-shadow-neo-brutalist"
              src={image2.filename}
              alt={image2.alt}
            />
            <div className="absolute -right-10 -bottom-10">
              <div className="w-full">
                <img src={flavourImage.filename} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
