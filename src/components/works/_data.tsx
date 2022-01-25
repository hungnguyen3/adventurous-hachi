// chakra ui sample code snippet
export const works = [
	{
		id: '1',
		name: 'Copperleaf Technologies',
		positionName: 'Software Developer',
		startDate: new Date(2022, 1 - 1),
		endDate: new Date(2022, 8 - 1),
		imageUrl:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kmu112bbotnbapfd3z7m',
		description: '',
	},
	{
		id: '2',
		name: 'Vecima Networks',
		positionName: 'Software Quality Developer',
		startDate: new Date(2021, 5 - 1),
		endDate: new Date(2021, 12 - 1),
		imageUrl:
			'https://neroglobal.com/wp-content/uploads/2017/06/LP_laptop_phone-900x544.png',
		rating: 4,
		ratingCount: 12,
		description: '',
	},
	{
		id: '3',
		name: 'Dyne Technologies Inc',
		positionName: 'Software Developer',
		startDate: new Date(2021, 5 - 1),
		endDate: null,
		imageUrl: 'https://dyneapp.files.wordpress.com/2021/09/frame-7167.png',
		description: '',
	},
	{
		id: '4',
		name: 'UBC Launch Pad',
		positionName: 'Software Developer',
		startDate: new Date(2021, 9 - 1),
		endDate: null,
		imageUrl: 'https://ubclaunchpad.com/img/landing.77f06a83.png',
		description: '',
	},
];

export type ElementType<T extends ReadonlyArray<unknown>> =
	T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Work = ElementType<typeof works>;
