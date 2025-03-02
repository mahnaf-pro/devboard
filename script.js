//! Setting Dynamic Date
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const todayDay = weekdays[new Date().getDay()];
const todayDate = new Date().getDate();
const thisMonth = months[new Date().getMonth()];
const thisYear = new Date().getFullYear();

const todayDateEl = document.querySelectorAll("#today-date > div > h4 span")[1];
const todayDayEl = document.querySelector("#today-date > div > h4 span");
todayDayEl.innerText = todayDay;
todayDateEl.innerText = `${todayDate} ${thisMonth} ${thisYear}`;


//! Changing Color Theme Dynamically
const colors = ['#E9E0FF', '#FFE0E0', '#E0FFE0', '#FFFFE0', '#FFF0E0', '#E0FFFF'];
document.querySelector("#theme-switcher-container img").addEventListener('click', function() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
}) 


let taskCount = 0;
//! Adding EventListeners to Complete Task Buttons
document.getElementById('dashboard-tasks').addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
        const datetime = new Date();
        let meridiem;
        if (datetime.getHours() < 12)
            meridiem = 'AM';
        else
            meridiem = 'PM';
        const currentTime = `${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()} ${meridiem}`;
        const completeBtn = event.target;
        const taskCard = completeBtn.closest('.task-card');
        const taskTitle = taskCard.querySelector('.title').innerText;
        taskCount++;
        //! Showing Alert
        window.alert("Board updated successfully!");
        if (taskCount === 6)
            window.alert("Congrats! You've completed all the Assigned Tasks.")
        //! Changing Tasks Counts
        const assignedTasks = document.querySelector("#assigned-tasks > div > h3");
        const completedTasks = document.querySelector("#completed-tasks > h4");
        assignedTasks.innerText = `0${parseInt(assignedTasks.innerText) - 1}`;
        completedTasks.innerText = parseInt(completedTasks.innerText) + 1;
        //! Disabling Complete Button
        completeBtn.classList.remove('shadow', 'shadow-primary', 'hover:shadow-md', 'hover:shadow-blue-600', 'active:shadow-none', 'transition-shadow');
        completeBtn.classList.add('bg-opacity-50', 'text-opacity-70');
        completeBtn.setAttribute('disabled', null);
        //! Adding a Activity in Activity Log
        const activityContainer = document.getElementById('activities');
        const activity = document.createElement('div');
        activity.classList.add('p-3', 'rounded-md', 'bg-[#E0F0FF]');
        activity.innerText = `You've completed the task '${taskTitle}' at ${currentTime}`;
        activityContainer.appendChild(activity);
    }
});


//! Adding EventListener in Clear Activity History Button
document.querySelector("#activity-log-header > button").addEventListener('click', function(event) {
    const clearBtn = event.target;
    clearBtn.parentNode.parentNode.querySelector('#activities').innerHTML = null;
});
