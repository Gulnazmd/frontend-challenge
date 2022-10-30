import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Images
import FullScreen from '../../images/pressed.svg';

const Header: FC = () => {
	const toggleFullScreen = () => {
		if (window.innerHeight == screen.height) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		} else {
			document.body.requestFullscreen();
		}
	};
	return (
		<nav>
			<div className='flex items-center mb-5'>
				<Link to='/' className='flex items-center'>
					<h4 className='self-center text-xl font-semibold text-white font-futura'>
						Все котики
					</h4>
				</Link>

				<div className='flex items-center mb-5'>
					<Link to='/LikedCats'>
						<div className='flex items-center text-white'>
							<div className='inline-block items-center justify-end text-sm md:order-2'>
								<h5>Любимые котики</h5>
							</div>
						</div>
					</Link>

					<div>
						<button onClick={toggleFullScreen}>
							<img
								src={FullScreen}
								className='h-6 sm:h-9'
								alt='FullScreen'
							/>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
