const db = require('../models');

const Slides = [
	{
		id: '1',
		image: "https://images.unsplash.com/photo-1675191475318-d2bf6bad1200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '2',
		image: "https://images.unsplash.com/photo-1675208985060-78a2d4a28dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '3',
		image: "https://images.unsplash.com/photo-1675410541565-af66672ad1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '4',
		image: "https://images.unsplash.com/photo-1675104180563-5971716d71e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '5',
		image: "http://unsplach.com/...",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '6',
		image: "http://unsplach.com/...",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '7',
		image: "http://unsplach.com/...",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '8',
		image: "http://unsplach.com/...",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '9',
		image: "http://unsplach.com/...",
		title: "Strong mask",
		subTitle: "Secondary text"
	},
	{
		id: '10',
		image: "http://unsplach.com/...",
		title: "Strong mask",
		subTitle: "Secondary text"
	}
];

exports.getAll = (req, res) => {
	const slideCount = req.query.slides ? req.query.slides : 1 ;
	if (slideCount <= 10) {
		const slides = Slides.slice(0, slideCount);
		return res.send({
			success: true,
			data: slides,
			message: "Slides successfully fetched.",
		});
	} else {
		return res.status(404).send({message: `Maximum 10 slides.`,});
	}
};
