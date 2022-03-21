const display_obj = document.getElementById('display');
const aries_btn = document.getElementById('Ari');
const taurus_btn = document.getElementById('Tau');
const gemini_btn = document.getElementById('Gem');
const cancer_btn = document.getElementById('Can');
const leo_btn = document.getElementById('Leo');
const virgo_btn = document.getElementById('Vir');
const libra_btn = document.getElementById('Lib');
const scorpio_btn = document.getElementById('Sco');
const sagittarius_btn = document.getElementById('Sag');
const capricorn_btn = document.getElementById('Cap');
const aquarius_btn = document.getElementById('Aqu');
const pisces_btn = document.getElementById('Pis');

aries_btn.addEventListener('click', function() {
    console.log('sfx1 - Aries button clicked');
    userPicked('Ari');
});
taurus_btn.addEventListener('click', function() {
    console.log('sfx2 - Taurus button clicked');
    userPicked('Tau');
});
gemini_btn.addEventListener('click', function() {
    console.log('sfx3 - Gemini button clicked');
    userPicked('Gem');
});
cancer_btn.addEventListener('click', function() {
    console.log('sfx4 - Cancer button clicked');
    userPicked('Can');
});
leo_btn.addEventListener('click', function() {
    console.log('sfx5 - Leo button clicked');
    userPicked('Leo');
});
virgo_btn.addEventListener('click', function() {
    console.log('sfx6 - Virgo button clicked');
    userPicked('Vir');
});
libra_btn.addEventListener('click', function() {
    console.log('sfx7 - Libra button clicked');
    userPicked('Lib');
});
scorpio_btn.addEventListener('click', function() {
    console.log('sfx8 - Scorpio button clicked');
    userPicked('Sco');
});
sagittarius_btn.addEventListener('click', function() {
    console.log('sfx9 - Sagittarius button clicked');
    userPicked('Sag');
});
capricorn_btn.addEventListener('click', function() {
    console.log('sfx10 - Capricorn button clicked');
    userPicked('Cap');
});
aquarius_btn.addEventListener('click', function() {
    console.log('sfx11 - Aquarius button clicked');
    userPicked('Aqu');
});
pisces_btn.addEventListener('click', function() {
    console.log('sfx12 - Pisces button clicked');
    userPicked('Pis');
});

function userPicked(buttonName) {
    console.log('User picked ' + buttonName);
    const z_copy = document.getElementById('z_copy');
    const z_image = document.getElementById('z_image');
    const z_description = document.getElementById('z_description');

    switch (buttonName) {
        case 'Ari':
            console.log('aries was clicked');
            speakers.src = 'Audio/sfx1.wav';
            speakers.play();
            z_image.src = 'Images/Ghost.png';
            z_copy.innerHTML = "Aries - Ghost";
            z_description.innerHTML = "Mysterious!"
            modal.hidden = !modal.hidden;
        break;
        case 'Tau':
            console.log('taurus was clicked');
            speakers.src = `Audio/sfx2.wav`;
            speakers.play();
            z_image.src = 'Images/Fire.png';
            z_copy.innerHTML = "Taurus - Fire";
            z_description.innerHTML = "Dependable!"
            modal.hidden = !modal.hidden;
        break;
        case 'Gem':
            console.log('gemini was clicked');
            speakers.src = `Audio/sfx3.wav`;
            speakers.play();
            z_image.src = 'Images/Mirror.png';
            z_copy.innerHTML = "Gemini - Mirror";
            z_description.innerHTML = "Playful!"
            modal.hidden = !modal.hidden;
        break;
        case 'Can':
            console.log('cancer was clicked');
            speakers.src = `Audio/sfx4.wav`;
            speakers.play();
            z_image.src = 'Images/Fighter.png';
            z_copy.innerHTML = "Cancer - Fighter";
            z_description.innerHTML = "Driven!"
            modal.hidden = !modal.hidden;
        break;
        case 'Leo':
            console.log('leo was clicked');
            speakers.src = `Audio/sfx5.wav`;
            speakers.play();
            z_image.src = 'Images/Animal.png';
            z_copy.innerHTML = "Leo - Animal";
            z_description.innerHTML = "Ferocious!"
            modal.hidden = !modal.hidden;
        break;
        case 'Vir':
            console.log('virgo was clicked');
            speakers.src = `Audio/sfx6.wav`;
            speakers.play();
            z_image.src = 'Images/Sword.png';
            z_copy.innerHTML = "Virgo - Sword";
            z_description.innerHTML = "Stable!"
            modal.hidden = !modal.hidden;
        break;
        case 'Lib':
            console.log('libra was clicked');
            speakers.src = `Audio/sfx7.wav`;
            speakers.play();
            z_image.src = 'Images/Yoyo.png';
            z_copy.innerHTML = "Libra - Yoyo";
            z_description.innerHTML = "Skilled!"
            modal.hidden = !modal.hidden;
        break;
        case 'Sco':
            console.log('scorpio was clicked');
            speakers.src = `Audio/sfx8.wav`;
            speakers.play();
            z_image.src = 'Images/Beetle.png';
            z_copy.innerHTML = "Scorpio - Beetle";
            z_description.innerHTML = "Serious!"
            modal.hidden = !modal.hidden;
        break;
        case 'Sag':
            console.log('sagittarius was clicked');
            speakers.src = `Audio/sfx9.wav`;
            speakers.play();
            z_image.src = 'Images/Cupid.png';
            z_copy.innerHTML = "Sagittarius - Cupid";
            z_description.innerHTML = "Optimistic!"
            modal.hidden = !modal.hidden;
        break;
        case 'Cap':
            console.log('capricorn was clicked');
            speakers.src = `Audio/sfx10.wav`;
            speakers.play();
            z_image.src = 'Images/Bomb.png';
            z_copy.innerHTML = "Capricorn - Bomb";
            z_description.innerHTML = "Cunning!"
            modal.hidden = !modal.hidden;
        break;
        case 'Aqu':
            console.log('aquarius was clicked');
            speakers.src = `Audio/sfx11.wav`;
            speakers.play();
            z_image.src = 'Images/Plasma.png';
            z_copy.innerHTML = "Aquarius - Plasma";
            z_description.innerHTML = "Unique!"
            modal.hidden = !modal.hidden;
        break;
        case 'Pis':
            console.log('pisces was clicked');
            speakers.src = `Audio/sfx12.wav`;
            speakers.play();
            z_image.src = 'Images/Beam.png';
            z_copy.innerHTML = "Pisces - Beam";
            z_description.innerHTML = "Colorful!"
            modal.hidden = !modal.hidden;
        break;
        default:
            console.log('A button was clicked!');
    }
}

const userSubmitBtn = document.getElementById('user_submit');

userSubmitBtn.addEventListener('click', function() {

    const userBday = new Date(document.getElementById('bday').value);
    const whichMonth = userBday.getUTCMonth() + 1;
    const whichDayOfMonth = userBday.getUTCDate();

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Cap";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
    }

    console.log(AstroSign);
    userPicked(AstroSign);
});

const modal = document.getElementById('modal');
const modal_closebtn = document.getElementById('btn-modal-close');
modal_closebtn.addEventListener('click', function() {
    console.log('modal close clicked!');
    modal.hidden = !modal.hidden;
});

const help_submitbtn = document.getElementById('help_submit');
help_submitbtn.addEventListener('click', function() {
    console.log('help button clicked');
    modal_2.hidden = !modal_2.hidden;
});