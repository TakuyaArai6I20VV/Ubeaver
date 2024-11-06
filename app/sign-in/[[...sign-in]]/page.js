import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';

export default function Page() {
  return (
    <>
    <div className="relative min-h-screen">
        <Image src='/ubeaver-background.jpg' layout="fill" objectFit="cover"
            className="object-cover w-full h-full"
            alt="Ubeaver background"
        />
        <div className="absolute top-32 right-5">
          <SignIn />
        </div>
    </div>
    </>
  );
}