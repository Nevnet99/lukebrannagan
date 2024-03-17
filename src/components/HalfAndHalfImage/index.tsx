/* eslint-disable @next/next/no-img-element */
import { PageSection } from '@components/shared/PageSection';
import Image from 'next/image';
import { HalfAndHalfImageStoryblok } from '../../types/component-types-sb';

export type THalfAndHalfImage = {
  blok: HalfAndHalfImageStoryblok;
};
export const HalfAndHalfImage = ({ blok }: THalfAndHalfImage) => {
  const { image1, image2, flavourImage } = blok;

  return (
    <PageSection className="border-t-0 pt-10">
      <div className=" max-w-[80%] mx-auto ">
        <div className="flex flex-col md:flex-row gap-10 ">
          <div className="relative w-full md:w-1/2 drop-shadow-neo-brutalist h-[30rem]">
            <Image
              className="object-cover rounded-xl"
              src={image1.filename}
              fill
              alt={image1.alt || ''}
            />
          </div>
          <div className="relative w-full md:w-1/2  h-[30rem]">
            <Image
              className="object-cover drop-shadow-neo-brutalist  rounded-xl"
              src={image2.filename}
              fill
              alt={image2.alt || ''}
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
