function updatePage() {
	const targetDate = new Date("June 12, 2025 14:30:00").getTime();
	const now = new Date();
	const timeDifference = targetDate - now.getTime();
	if (timeDifference > 0) {
		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

		document.getElementById("clock").textContent =
			`${String(days).padStart(3, '0')} days, ${String(hours).padStart(2, '0')} hrs, ` +
			`${String(minutes).padStart(2, '0')} mins, ${String(seconds).padStart(2, '0')}s`;
	} else {
		document.getElementById("clock").innerHTML = "Happy summer!";
	}
	var nowTime = new Date();
	var hour = nowTime.getHours();
	var minute = nowTime.getMinutes();
	var second = nowTime.getSeconds() + (minute * 60) + (hour * 3600);
	var timeNow = ((hour) * 60) + minute;
	var period;
	var firstLunchPeriod;
	var secondLunchPeriod;
	var totalRemaining;
	if (timeNow < ((7 * 60) + 30)) {
		firstLunchPeriod = 0;
		secondLunchPeriod = 0;
		totalRemaining = 27000 - second;
	}
	else if (timeNow < ((7 * 60) + 35)) {
		firstLunchPeriod = 0.5;
		secondLunchPeriod = 0.5;
		totalRemaining = 27300 - second;
	}
	else if (timeNow < ((8 * 60) + 25)) {
		firstLunchPeriod = 1;
		secondLunchPeriod = 1;
		totalRemaining = 30300 - second;
	}
	else if (timeNow < ((8 * 60) + 30)) {
		firstLunchPeriod = 1.5;
		secondLunchPeriod = 1.5;
		totalRemaining = (((8 * 60) + 30) * 60) - second;
	}
	else if (timeNow < ((9 * 60) + 20)) {
		firstLunchPeriod = 3;
		secondLunchPeriod = 3;
		totalRemaining = (((9 * 60) + 20) * 60) - second;
	}
	else if (timeNow < ((9 * 60) + 25)) {
		firstLunchPeriod = 3.5;
		secondLunchPeriod = 3.5;
		totalRemaining = (((9 * 60) + 25) * 60) - second;
	}
	else if (timeNow < ((10 * 60) + 15)) {
		firstLunchPeriod = 4;
		secondLunchPeriod = 4;
		totalRemaining = (((10 * 60) + 15) * 60) - second;
	}
	else if (timeNow < ((10 * 60) + 20)) {
		firstLunchPeriod = 4.5;
		secondLunchPeriod = 4.5;
		totalRemaining = (((10 * 60) + 20) * 60) - second;
	}
	else if (timeNow < ((11 * 60) + 10)) {
		firstLunchPeriod = 5;
		secondLunchPeriod = 5;
		totalRemaining = (((11 * 60) + 10) * 60) - second;
	}
	else if (timeNow < ((11 * 60) + 15)) {
		firstLunchPeriod = 5.5;
		secondLunchPeriod = 5.5;
		totalRemaining = (((11 * 60) + 15) * 60) - second;
	} else if (timeNow < ((12 * 60) + 40)) {
		if (timeNow < ((11 * 60) + 45)) {
			firstLunchPeriod = 6;
			totalRemaining = (((11 * 60) + 45) * 60) - second;
		}
		else if (timeNow < ((11 * 60) + 50)) {
			firstLunchPeriod = 6.5;
			totalRemaining = (((11 * 60) + 50) * 60) - second;
		} else if (timeNow < ((12 * 60) + 40)) {
			firstLunchPeriod = 7;
			totalRemaining = (((12 * 60) + 40) * 60) - second;
		}
		if (timeNow < ((12 * 60) + 5)) {
			secondLunchPeriod = 6;
			totalRemaining = (((12 * 60) + 5) * 60) - second;
		}
		else if (timeNow < ((12 * 60) + 10)) {
			secondLunchPeriod = 6.5;
			totalRemaining = (((12 * 60) + 10) * 60) - second;
		} else if (timeNow < ((12 * 60) + 40)) {
			secondLunchPeriod = 7;
			totalRemaining = (((12 * 60) + 40) * 60) - second;
		}
	} else if (timeNow < ((12 * 60) + 45)) {
		firstLunchPeriod = 7.5;
		secondLunchPeriod = 7.5;
		totalRemaining = (((12 * 60) + 45) * 60) - second;
	}
	else if (timeNow < ((13 * 60) + 35)) {
		firstLunchPeriod = 8;
		secondLunchPeriod = 8;
		totalRemaining = (((13 * 60) + 35) * 60) - second;
	}
	else if (timeNow < ((13 * 60) + 40)) {
		firstLunchPeriod = 8.5;
		secondLunchPeriod = 8.5;
		totalRemaining = (((13 * 60) + 40) * 60) - second;
	}
	else if (timeNow < ((14 * 60) + 30)) {
		firstLunchPeriod = 9;
		secondLunchPeriod = 9;
		totalRemaining = (((14 * 60) + 30) * 60) - second;
	}
	else if (timeNow < (24 * 60)) {
		firstLunchPeriod = 0;
		secondLunchPeriod = 0;
		totalRemaining = ((24 * 60) * 60) - second + (((7 * 60) + 35) * 60)
	}
	var remainingMinutes = Math.floor(totalRemaining / 60);
	var remainingSeconds = totalRemaining - (remainingMinutes * 60);
	if (remainingSeconds < 10) {
		remainingSeconds = "0" + remainingSeconds;
	}
	var timeRemaining = remainingMinutes + ":" + remainingSeconds;
	if (Number.isInteger(secondLunchPeriod) == true) {
		document.getElementById('classTimeTitle').textContent = 'Class Time';
	} else {
		document.getElementById('classTimeTitle').textContent = 'Passing Time';
	}
	document.getElementById("classTime").textContent = timeRemaining;
	const today = new Date();
	const targetDate2 = new Date("June 12, 2025");
	var months;
	if (targetDate2 <= today) {
		months = ":)";
	}
	months = targetDate2.getMonth() - today.getMonth();
	if (months < 0) {
		months = months + 12;
	}
	document.getElementById("months").textContent = months;
	const startDate = new Date('2024-09-03');
	const endDate = new Date('2025-06-12');
	const currentDate = new Date();
	const totalTime = endDate - startDate;
	const elapsedTime = currentDate - startDate;
	const percentageElapsed = Math.round((elapsedTime / totalTime) * 100);
	document.getElementById('percent').textContent = `${percentageElapsed}%`;
	const day = now.getDate();
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const month = monthNames[now.getMonth()];
	const year = now.getFullYear();
	const formattedDate = `${day} ${month} ${year}`;
	let hours1 = now.getHours();
	const minutes1 = String(now.getMinutes()).padStart(2, '0');
	const seconds1 = String(now.getSeconds()).padStart(2, '0');
	const ampm = hour >= 12 ? "pm" : "am";
	hours1 = hours1 % 12 || 12;
	const formattedTime = `${hours1}:${minutes1}:${seconds1} ${ampm}`;
	document.getElementById("timeAndDateTitle").textContent = formattedDate;
	document.getElementById("timeAndDate").textContent = formattedTime;
	progressBarWidth = (((elapsedTime / totalTime) * 100) / 100) * 19.5;
	progressBarWidthString = progressBarWidth + "%";
	document.getElementById('progressBar1').style.width = progressBarWidthString;
	document.getElementById('progressBar2').style.width = progressBarWidthString;
	document.getElementById('firstLunchP1').innerHTML = 'P1: 7:35 - 8:25<br>';
	document.getElementById('firstLunchP2').innerHTML = 'P2: 8:30 - 9:20 <br>';
	document.getElementById('firstLunchAdvisory').innerHTML = '';
	document.getElementById('firstLunchP3').innerHTML = 'P3: 9:25 - 10:15 <br>';
	document.getElementById('firstLunchP4').innerHTML = 'P4: 10:20 - 11:10 <br>';
	document.getElementById('firstLunchLunch').innerHTML = 'L: 11:15 - 11:45 <br>';
	document.getElementById('firstLunchP5').innerHTML = 'P5: 11:50 - 12:40 <br>';
	document.getElementById('firstLunchP6').innerHTML = 'P6: 12:45 - 1:35 <br>';
	document.getElementById('firstLunchP7').innerHTML = 'P7: 1:40 - 2:30';
	document.getElementById('secondLunchP1').innerHTML = 'P1: 7:35 - 8:25<br>';
	document.getElementById('secondLunchP2').innerHTML = 'P2: 8:30 - 9:20 <br>';
	document.getElementById('secondLunchAdvisory').innerHTML = '';
	document.getElementById('secondLunchP3').innerHTML = 'P3: 9:25 - 10:15 <br>';
	document.getElementById('secondLunchP4').innerHTML = 'P4: 10:20 - 11:10 <br>';
	document.getElementById('secondLunchP5').innerHTML = 'P5: 11:15 - 12:05<br>';
	document.getElementById('secondLunchLunch').innerHTML = 'L: 12:10 - 12:40<br>';
	document.getElementById('secondLunchP6').innerHTML = 'P6: 12:45 - 1:35 <br>';
	document.getElementById('secondLunchP7').innerHTML = 'P7: 1:40 - 2:30';
	document.getElementById('schedules').style.color = '#ffffff';
	if (firstLunchPeriod == 1) {
		document.getElementById('firstLunchP1').style.color = '#ff8800';
	} else if (firstLunchPeriod == 2) {
		document.getElementById('firstLunchP2').style.color = '#ff8800';
	} else if (firstLunchPeriod == 3) {
		document.getElementById('firstLunchAdvisory').style.color = '#ff8800';
	} else if (firstLunchPeriod == 4) {
		document.getElementById('firstLunchP3').style.color = '#ff8800';
	} else if (firstLunchPeriod == 5) {
		document.getElementById('firstLunchP4').style.color = '#ff8800';
	} else if (firstLunchPeriod == 6) {
		document.getElementById('firstLunchLunch').style.color = '#ff8800';
	} else if (firstLunchPeriod == 7) {
		document.getElementById('firstLunchP5').style.color = '#ff8800'
	} else if (firstLunchPeriod == 8) {
		document.getElementById('firstLunchP6').style.color = '#ff8800';
	} else if (firstLunchPeriod == 9) {
		document.getElementById('firstLunchP7').style.color = '#ff8800';
	}
	if (secondLunchPeriod == 1) {
		document.getElementById('secondLunchP1').style.color = '#ff8800';
	} else if (secondLunchPeriod == 2) {
		document.getElementById('secondLunchP2').style.color = '#ff8800';
	} else if (secondLunchPeriod == 3) {
		document.getElementById('secondLunchAdvisory').style.color = '#ff8800';
	} else if (secondLunchPeriod == 4) {
		document.getElementById('secondLunchP3').style.color = '#ff8800';
	} else if (secondLunchPeriod == 5) {
		document.getElementById('secondLunchP4').style.color = '#ff8800';
	} else if (secondLunchPeriod == 6) {
		document.getElementById('secondLunchP5').style.color = '#ff8800';
	} else if (secondLunchPeriod == 7) {
		document.getElementById('secondLunchLunch').style.color = '#ff8800';
	} else if (secondLunchPeriod == 8) {
		document.getElementById('secondLunchP6').style.color = '#ff8800';
	} else if (secondLunchPeriod == 9) {
		document.getElementById('secondLunchP7').style.color = '#ff8800';
	}
} setInterval(updatePage, 10);
