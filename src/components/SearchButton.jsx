import { ReactComponent as SearchIcon } from '../assets/svgs/search.svg';

const SearchButton = () => {
	return (
		<button className='bg-[#618787] hover:opacity-90 py-6 px-7 transition duration-200'>
			<SearchIcon className='w-8 h-8' />
		</button>
	);
};

export default SearchButton;
