import React from 'react';
import clsx from 'clsx';
import { Typography } from '../Typography';
import { AuthorStoryblok } from '../../../types/component-types-sb';

export const Avatar = ({
  company,
  jobTitle,
  name,
  profilePicture,
  className,
  orientation = 'center',
}: AuthorStoryblok & {
  orientation?: 'left' | 'center';
  className?: string;
}) => (
  <div
    className={clsx(
      'flex gap-4 ',
      orientation === 'left' && 'justify-start items-center',
      orientation === 'center' && 'justify-center items-center',
      className,
    )}
  >
    {profilePicture && (
      <div className="flex overflow-hidden rounded-full w-14 h-14  border-2 border-primary">
        <img src={profilePicture.filename} alt={profilePicture.alt} />
      </div>
    )}
    <div className="flex flex-col text-left">
      <Typography className="font-bold">{name}</Typography>
      {company && jobTitle && (
        <Typography className="flex opacity-70">
          {jobTitle} - {company}
        </Typography>
      )}
    </div>
  </div>
);
