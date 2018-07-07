import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<link href="https://fonts.googleapis.com/css?family=Philosopher:700i|Ubuntu" rel="stylesheet" />
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Notitia - Age of Information</h1>
				</header>
				<body className="App-body">
					<div className="navbar">
						<ul>
							<li>
								<a class="active" href="/">
									Home
								</a>
							</li>
							<li>
								<a href="/api/current_user">Current User</a>
							</li>
							<li>
								<a href="/auth/google">Login</a>
							</li>
							<li>
								<a href="/api/logout">Logout</a>
							</li>
						</ul>
					</div>

					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sed incidunt rerum, maxime libero
						ea laudantium laborum dicta porro. Porro soluta, nihil amet praesentium ducimus neque ea animi
						omnis ex. Officiis libero hic sequi voluptates eligendi repellat nisi, blanditiis eius
						architecto magnam quo quisquam animi dolorem consequatur ipsam, ullam minima. Qui eaque
						provident facilis voluptatibus quod commodi officia vel aliquid vitae itaque ut quis soluta
						repellendus eius quaerat officiis suscipit nobis at nihil explicabo veniam, dicta aut? Id labore
						commodi aliquam corporis modi repellat consectetur, rem sapiente voluptates porro repellendus
						laudantium fugit aspernatur explicabo atque incidunt sequi illo ratione. Aperiam et est
						cupiditate voluptatum corporis libero aliquid, nemo voluptates voluptatibus tempora quam
						molestiae, mollitia architecto debitis dolores fugiat optio deleniti nisi commodi iusto?
						Suscipit sit id deleniti doloremque iure velit, exercitationem consequuntur sed ut quidem optio
						tenetur pariatur veniam ex fugit libero! Laudantium vero et deleniti itaque nemo distinctio qui.
						<iframe src="/api/current_user" />
					</p>
				</body>
			</div>
		);
	}
}

export default App;
