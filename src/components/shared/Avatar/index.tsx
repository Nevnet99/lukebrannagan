/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import { Typography } from '../Typography';
import { AuthorStoryblok } from '../../../types/component-types-sb';
import { cn } from '../../../utils/cn';

export const Avatar = ({
  company,
  jobTitle,
  name,
  profilePicture,
  className,
  orientation = 'center',
  updatedAt,
}: AuthorStoryblok & {
  orientation?: 'left' | 'center';
  className?: string;
  updatedAt?: string;
}) => (
  <div
    className={cn(
      'flex gap-4 ',
      orientation === 'left' && 'justify-start items-center',
      orientation === 'center' && 'justify-center items-center',
      className,
    )}
  >
    {profilePicture && (
      <div className="flex overflow-hidden rounded-full  min-w-14 min-h-14  border-2 border-primary">
        <Image
          src={profilePicture.filename}
          alt={profilePicture.alt || ''}
          className="object-cover"
          width={52}
          height={52}
        />
      </div>
    )}
    <div className="flex flex-col text-left">
      <Typography className="font-bold">{name}</Typography>
      {company && jobTitle && (
        <Typography className="flex opacity-70">
          {jobTitle} - {company}
        </Typography>
      )}
      {updatedAt && (
        <Typography className="flex opacity-70">
          Last Updated: {format(updatedAt, 'do MMM yyyy p')}
        </Typography>
      )}
    </div>
  </div>
);
