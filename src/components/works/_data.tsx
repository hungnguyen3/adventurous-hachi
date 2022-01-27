export const works = [
	{
		id: '0',
		name: 'Copperleaf Technologies Inc',
		positionName: 'Software Developer',
		startDate: new Date(2022, 1 - 1),
		endDate: new Date(2022, 8 - 1),
		imageUrl:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kmu112bbotnbapfd3z7m',
		description:
			'Copperleaf works with asset-intensive companies to redefine asset management planning and provide decision analytics for critical infrastructure.',
		website: 'https://www.copperleaf.com/',
		duties: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		],
		techStack: [
			'Angular',
			'Typescript',
			'C#',
			'.NET',
			'SQL',
			'Oracle',
			'PostgreSQL',
		],
	},
	{
		id: '1',
		name: 'Vecima Networks Inc',
		positionName: 'Software Quality Developer',
		startDate: new Date(2021, 5 - 1),
		endDate: new Date(2021, 12 - 1),
		imageUrl:
			'https://neroglobal.com/wp-content/uploads/2017/06/LP_laptop_phone-900x544.png',
		description:
			"Nero Global's secure GPS fleet tracking management software for mobile service vehicles will reduce your costs and increase productivity.",
		website: 'https://neroglobal.com/',
		duties: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		],
		techStack: ['Sahi - test automation software', 'Javascript'],
	},
	{
		id: '2',
		name: 'Dyne Technologies Inc',
		positionName: 'Software Developer',
		startDate: new Date(2021, 5 - 1),
		endDate: null,
		imageUrl: 'https://dyneapp.files.wordpress.com/2021/09/frame-7167.png',
		description:
			'DYNE is a user-based application aimed to help you connect with people from your community over food. Meet old friends, make new ones, or grow your network with us.',
		website: 'https://dyneapp.ca',
		duties: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		],
		techStack: [
			'React (Next.js)',
			'Javascript',
			'Node.js',
			'MongoDB',
			'Web services',
		],
	},
	{
		id: '3',
		name: 'UBC Launch Pad',
		positionName: 'Software Developer',
		startDate: new Date(2021, 9 - 1),
		endDate: null,
		imageUrl: 'https://ubclaunchpad.com/img/landing.77f06a83.png',
		description:
			'A leading student-run software club based in the University of British Columbia devoted to building applications in a collaborative and professional environment.',
		website: 'https://ubclaunchpad.com/',
		duties: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		],
		techStack: ['Node.js', 'Typescript', 'React Native', 'Web services'],
	},
];

export type ElementType<T extends ReadonlyArray<unknown>> =
	T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Work = ElementType<typeof works>;
