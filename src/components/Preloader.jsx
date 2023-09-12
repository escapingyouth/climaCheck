export default function Preloader() {
	return (
		<div className='preloader-container'>
			<div className='preloader-icon'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					xmlSpace='preserve'
					style={{
						enableBackground: 'new 0 0 800 600',
						animation: 'rotate 2s linear infinite'
					}}
					viewBox='0 0 800 600'
				>
					<path
						d='M400 300v200M384 374.7l16-16 16 16M335.8 465.4l64.2-64.1 64.2 64.1M400 300 226.8 400M327.3 323.5l21.9 5.8-5.9 21.9M224.7 327.1l87.6 23.5-23.5 87.7M400 300 226.8 200M343.3 248.8l5.9 21.9-21.9 5.8M288.8 161.7l23.5 87.7-87.6 23.5M400 300V100M416 225.3l-16 16-16-16M464.2 134.6 400 198.7l-64.2-64.1M400 300l173.2-100M472.7 276.5l-21.9-5.8 5.9-21.9M575.3 272.9l-87.6-23.5 23.5-87.7M400 300l173.2 100M456.7 351.2l-5.9-21.9 21.9-5.8M511.2 438.3l-23.5-87.7 87.6-23.5'
						className='st0'
					/>
				</svg>
			</div>
		</div>
	);
}
