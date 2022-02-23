export const projects = [
	{
		id: '1',
		name: 'What The Fridge',
		imageUrl: '/projects/What-The-Fridge.jpg',
		description: 'Solution to tracking grocery items',
		languages: ['TypeScript', 'SQL'],
		tools: ['Next.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
		sourceCode: 'https://github.com/What-The-Fridge/What-The-Fridge',
		demo: 'https://what-the-fridge.adventurous-hachi.com',
	},
	{
		id: '2',
		name: 'Euphony',
		imageUrl: '/projects/Euphony.avif',
		description: 'Music discovery mobile app',
		languages: ['TypeScript', 'Python'],
		tools: ['React Native', 'Node.js', 'Machine Learning'],
		sourceCode: 'https://github.com/ubclaunchpad/spotify-gen',
	},
	{
		id: '3',
		name: 'Ingredients Decoder',
		imageUrl: '/projects/Ingredient-Decoder.png',
		description: 'Solution to ingredients and nutritional information',
		languages: ['C', 'Python', 'Java', 'JavaScript', 'Verilog'],
		tools: [
			'Raspberry Pi 4',
			'Android Studio',
			'Node.js',
			'MongoDB',
			'FPGA - DE1-SoC',
			'Sonar sensor',
			'Touch screen',
			'Camera',
			'HC-05 chip',
			'ESP-WROOM-02 chip',
		],
		sourceCode: 'https://github.com/hungnguyen3/Ingredient-Decoder',
		demo: 'https://www.youtube.com/watch?v=K5SHd9u0xCo&ab_channel=HungNguyen',
	},
	{
		id: '4',
		name: 'Lost Pets Finder',
		imageUrl: '/projects/Lost-Pet-Finder.jpg',
		description: 'An android app that connects people with their lost pets',
		languages: ['JavaScript'],
		tools: [
			'React Native',
			'Node.js',
			'MySQL',
			'AWS',
			'Firebase',
			'Jest',
			'Codacy',
			'Travis CI',
		],
		sourceCode: 'https://github.com/Lost-Pet-Finder/Lost-Pet-Finder',
	},
	{
		id: '5',
		name: 'SMS School',
		imageUrl: '/projects/SMS-School.png',
		description:
			'An online education system for children in developing countries',
		languages: ['TypeScript'],
		tools: ['React', 'Node.js', 'MongoDB', 'Twilio API', 'Bootstrap'],
		sourceCode: 'https://github.com/hungnguyen3/nwHacks',
	},
	{
		id: '6',
		name: 'Dancing Robot',
		imageUrl: '/projects/Dancing-Robot.jpg',
		description: 'A dancing robot, capable of switching between 6 dance moves',
		languages: ['Python'],
		tools: [
			'Raspberry Pi 4',
			'Servomotors',
			'LCD screen',
			'Piezzo buzzer',
			'RGB lights',
		],
		sourceCode: '',
		demo: 'https://www.youtube.com/watch?v=zXgueicf6Qo',
	},
	{
		id: '7',
		name: 'Line Tracking Robot',
		imageUrl: '/projects/Line-Tracking-Robot.jpg',
		description: 'An autonomous robotic vehicle',
		languages: ['Python'],
		tools: [
			'Raspberry Pi 4',
			'Servomotors',
			'LCD screen',
			'distance sensors',
			'RP4 camera',
		],
		sourceCode: '',
		demo: 'https://www.youtube.com/watch?v=RC4f2ZNXzzs&t=6s/&ab_channel=HungNguyen',
	},
	{
		id: '8',
		name: 'Finding Cherries',
		imageUrl: '/projects/Finding-Cherries.jpg',
		description: 'A 2D game with classic Mario style',
		languages: ['C#'],
		tools: ['Unity', 'Adobe Photoshop'],
		sourceCode: '',
		demo: 'https://simmer.io/@hunglnl1/bear-finds-home/',
	},
];

export type ElementType<T extends ReadonlyArray<unknown>> =
	T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Project = ElementType<typeof projects>;
