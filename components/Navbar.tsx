'use client';

import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const routes = [
	{
		name: 'Chat',
		path: '/'
	},
	{
		name: 'Profile',
		path: '/profile'
	}
];

const Navbar = () => {
	const pathname = usePathname();
	return (
		<div className='flex flex-row items-center justify-between bg-black text-white p-4'>
			{/* TODO: logo */}
			<Link href='/'>
				<h1 className='text-2xl font-bold'>Krypton AI</h1>
			</Link>
			<div className='flex items-center gap-x-6 text-lg'>
				{/* TODO: routes */}
				{routes.map(route => (
					<Link
						key={route.name}
						href={route.path}
						className={
							pathname === route.path
								? 'border-b-2 border-yellow'
								: ''
						}
					>
						{route.name}
					</Link>
				))}
        {/* TODO: User button */}

        <UserButton afterSignOutUrl='/' />
			</div>
		</div>
	);
};

export default Navbar;
