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
			'Develop new features in Angular to showcase breakdowns of costs, spending, and assets for end-users.',
			'Develop new features in Angular to help users automate investment workflows.',
		],
		techStack: ['Angular', 'Typescript', 'SCSS', 'C#', '.NET', 'SQL', 'Oracle'],
	},
	{
		id: '1',
		name: 'Vecima Networks Inc',
		positionName: 'Software Quality Developer',
		startDate: new Date(2021, 5 - 1),
		endDate: new Date(2021, 12 - 1),
		imageUrl: '/works/Nero.png',
		description:
			"Nero Global's secure GPS fleet tracking management software for mobile service vehicles will reduce your costs and increase productivity.",
		website: 'https://neroglobal.com/',
		duties: [
			'Performed manual and automated tests on software and hardware products.',
			'Developed test plans and wrote test suites in Javascript and Sahi software throughout the Agile development cycle.',
			'Reduced errors and failures of the existing test scripts up to 90 percent.',
			'Executed automated test scripts and reported bugs and errors upon daily staging updates and bi-weekly production updates.',
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
			'Worked in React (Next.js) to develop a managing dashboard web app for restaurants to monitor meetup details, coupons, promotion creations, etc.',
			'Developed and fixed backend endpoints using Node.js, Express.js, and MongoDB.',
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
			'Develop a Node.js backend server for a project called Euphony to communicate with front-end app, web services, and machine learning server.',
		],
		techStack: ['Node.js', 'Typescript', 'React Native', 'Web services'],
	},
];

export type ElementType<T extends ReadonlyArray<unknown>> =
	T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Work = ElementType<typeof works>;
