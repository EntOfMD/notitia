import React from 'react';
import { ToastContainer, ToastStore } from 'react-toasts';

function Toasts() {
	return (
		<div>
			<button onClick={() => ToastStore.error('Test')}>click me</button>
			<ToastContainer store={ToastStore} />
		</div>
	);
}

const Landing = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Notitia</h1>
			Age of Information
		</div>
	);
};

export default Landing;
