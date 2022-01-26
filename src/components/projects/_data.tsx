export const projects = [
	{
		id: '1',
		name: 'Euphony',
		imageUrl:
			'https://media.istockphoto.com/vectors/sample-sign-sample-square-speech-bubble-sample-vector-id1161352480?k=20&m=1161352480&s=612x612&w=0&h=uVaVErtcluXjUNbOuvGF2_sSib9dZejwh4w8CwJPc48=',
		description: 'Music discovery mobile app',
		languages: ['TypeScript', 'Python'],
		tools: ['React Native', 'Node.js', 'Machine Learning'],
		sourceCode: 'https://github.com/ubclaunchpad/spotify-gen',
	},
	{
		id: '2',
		name: 'Ingredients Decoder',
		imageUrl:
			'https://github.com/hungnguyen3/Ingredient-Decoder/blob/main/z_images/components.PNG?raw=true',
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
	},
	{
		id: '3',
		name: 'Lost Pets Finder',
		imageUrl:
			'https://github.com/Lost-Pet-Finder/Lost-Pet-Finder/blob/master/READMEPICTURES/5.PNG?raw=true',
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
		id: '4',
		name: 'SMS School',
		imageUrl:
			'https://raw.githubusercontent.com/hungnguyen3/nwHacks/master/images/8.PNG',
		description:
			'An online education system for children in developing countries',
		languages: ['TypeScript'],
		tools: ['React', 'Node.js', 'MongoDB', 'Twilio API', 'Bootstrap'],
		sourceCode: 'https://github.com/hungnguyen3/nwHacks',
	},
	{
		id: '5',
		name: 'Dancing Robot',
		imageUrl:
			'https://media.istockphoto.com/vectors/sample-sign-sample-square-speech-bubble-sample-vector-id1161352480?k=20&m=1161352480&s=612x612&w=0&h=uVaVErtcluXjUNbOuvGF2_sSib9dZejwh4w8CwJPc48=',
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
		id: '6',
		name: 'Line Tracking Robot',
		imageUrl:
			'https://media.istockphoto.com/vectors/sample-sign-sample-square-speech-bubble-sample-vector-id1161352480?k=20&m=1161352480&s=612x612&w=0&h=uVaVErtcluXjUNbOuvGF2_sSib9dZejwh4w8CwJPc48=',
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
		id: '7',
		name: 'Finding Cherries',
		imageUrl:
			'https://media.istockphoto.com/vectors/sample-sign-sample-square-speech-bubble-sample-vector-id1161352480?k=20&m=1161352480&s=612x612&w=0&h=uVaVErtcluXjUNbOuvGF2_sSib9dZejwh4w8CwJPc48=',
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
