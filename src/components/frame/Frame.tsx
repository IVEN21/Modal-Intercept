import Image from 'next/image';
import { Photo } from '../../photos';
import Link from 'next/link';

export default function Frame({ photo }: { photo: Photo }) {
  return (
    <>
      <Image alt='' src={photo.imageSrc} height={600} width={600} className='w-full object-cover aspect-square col-span-2' />

      <div className='bg-white p-4 px-6'>
        <h3>{photo.name}</h3>
        <p>Taken by {photo.username}</p>
        <div className='bg-black  text-white p-4 px-6'>
          <Link href={`/photos/${parseInt(photo.id) + 1}`} className=''>
            Next photo
          </Link>
        </div>
      </div>
    </>
  );
}
