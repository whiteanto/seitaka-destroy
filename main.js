'use strict';
{
	let count = 300;
	const field = document.getElementById('field');
	const butt = document.getElementById('button');
	const score = document.getElementById('score');
	let finish = document.createElement('p');


	butt.addEventListener('click', () => {

		finish.textContent = '';
		butt.style.display = 'none';

		const startTime = new Date;

		function timer() {
			const now = new Date();
			const passTime = now.getTime() - startTime.getTime();
			const min = Math.floor(passTime / 1000 / 60) % 60;
			const sec = Math.floor(passTime / 1000) % 60;
			document.getElementById('timer').textContent = String(min).padStart(2, '0') + '：' + String(sec).padStart(2, '0');
			retime();
			
		}

		function retime() {
			let re = setTimeout(timer, 1000);
			if (count === 0) {
				clearTimeout(re);
				field.appendChild(finish);
				finish.textContent = 'Finish!';
				count = 10;
				butt.style.display = 'inline';
			}
		}
		timer();

		for (let i = 0; i < 300; i++) {
			let seitaka = document.createElement('img');
			let positionTop = Math.random() * 500 + 'px';
			let positionRight = Math.random() * 550 + 'px';
			field.appendChild(seitaka);
			seitaka.src = '素材/seitaka.png';
			seitaka.className = 'enemy';
			seitaka.style.top = positionTop;
			seitaka.style.right = positionRight;

			seitaka.onclick = function () {
				this.remove();
				count--;
				score.textContent = '残り: ' + String(count).padStart(3, '0');
			}
}



	});


}
