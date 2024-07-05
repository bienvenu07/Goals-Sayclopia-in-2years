



function updateTime() {
    const now = new Date();
  
    const utcTime = now.toISOString(); 
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(now);
    document.getElementById("time-utc").innerText = utcTime;
    document.getElementById("day-of-week").innerText = day;
  }
  updateTime();

  setInterval(updateTime, 1000);