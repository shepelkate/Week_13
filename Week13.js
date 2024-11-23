function calculateDays() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const errorMessage = document.getElementById('error-message');
    const daysToBirthdayElement = document.getElementById('daysToBirthday');

    if (isNaN(birthdate.getTime())) {
        errorMessage.style.display = "block";
        daysToBirthdayElement.textContent = "";
        return;
    } else {
        errorMessage.style.display = "none";
    }


    const today = new Date();
    const currentYear = today.getFullYear();
    birthdate.setFullYear(currentYear);


    if (birthdate < today) {
        birthdate.setFullYear(currentYear + 1);
    }


    const timeDiff = birthdate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));


    daysToBirthdayElement.textContent = `До дня рождения осталось ${daysDiff} ${daysDiff === 1 ? 'день' : 'дня'}`;
}