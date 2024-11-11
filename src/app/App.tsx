import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import useMetrika from '../hooks/useMetrika';
import styles from './app.module.scss';
const Modal = React.lazy(
	() => import('../components/modal' /*webpackChunkName: "modal" */)
);

const AnotherComponent = React.lazy(
	() =>
		import(
			'../components/another-component' /*webpackChunkName: "another-component" */
		)
);

export const App = () => {
	const { ym, gtag } = useMetrika();

	return (
		<div className={styles.page}>
			<div className={styles.links}>
				<Link to='/another' className={styles.link}>
					Перейти на станицу c компонентом AnotherComponent
				</Link>
				<Link to='/modal' className={styles.link}>
					Перейти на станицу c компонентом Modal
				</Link>
				<button className={styles.link} onClick={() => ym('reachGoal', 'buy')}>
					Купить
				</button>
				<button
					className={styles.link}
					onClick={() =>
						gtag('event', 'add_to_cart', {
							event_name: 'add_to_cart',
						})
					}>
					Купить в 1 клик
				</button>
			</div>
			<Routes>
				<Route
					path='/modal'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Modal />
						</Suspense>
					}
				/>
				<Route
					path='/another'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<AnotherComponent />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
};
