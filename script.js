window.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        document.getElementById('utc-time').textContent = utcTime;

        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
        document.getElementById('day-of-week').textContent = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});