const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        const linkId = link.id;

        allLinks.forEach(l => l.classList.toggle("active", l === link));
        allTabs.forEach(tab => tab.classList.toggle("active-tab-content", tab.id === linkId));
    });
});



let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}



let sepanjangJalan = document.getElementById("sepanjang");
var audioPlayerSepanjang = document.getElementById('sepanjang-AP');

function openSongSepanjang(){
    sepanjangJalan.classList.add("open-song");
}
function closeSongSepanjang(){
    sepanjangJalan.classList.remove("open-song");
}
function loadSongSepanjang(){
    audioPlayerSepanjang.load();
    audioPlayerSepanjang.play();
}
function stopAudioSepanjang(){
    audioPlayerSepanjang.pause();
    audioPlayerSepanjang.currentTime = 0;
    
}


let lara = document.getElementById("lara");
var audioPlayerLara = document.getElementById('lara-AP');

function openSongLara(){
    lara.classList.add("open-song");
}
function closeSongLara(){
    lara.classList.remove("open-song");
}
function loadSongLara(){
    audioPlayerLara.load();
    audioPlayerLara.play();
}
function stopAudioLara(){
    audioPlayerLara.pause();
    audioPlayerLara.currentTime = 0;
}


let battle = document.getElementById("battle");
var audioPlayerBattle = document.getElementById('battle-AP');

function openSongBattle(){
    battle.classList.add("open-song");
}
function closeSongBattle(){
    battle.classList.remove("open-song");
}
function loadSongBattle(){
    audioPlayerBattle.load();
    audioPlayerBattle.play();
}
function stopAudioBattle(){
    audioPlayerBattle.pause();
    audioPlayerBattle.currentTime = 0;
}


let lebaran = document.getElementById("lebaran");
var audioPlayerLebaran = document.getElementById('lebaran-AP');

function openSongLebaran(){
    lebaran.classList.add("open-song");
}
function closeSongLebaran(){
    lebaran.classList.remove("open-song");
}
function loadSongLebaran(){
    audioPlayerLebaran.load();
    audioPlayerLebaran.play();
}
function stopAudioLebaran(){
    audioPlayerLebaran.pause();
    audioPlayerLebaran.currentTime = 0;
}


let ayah = document.getElementById("ayah");
var audioPlayerAyah = document.getElementById('ayah-AP');

function openSongAyah(){
    ayah.classList.add("open-song");
}
function closeSongAyah(){
    ayah.classList.remove("open-song");
}
function loadSongAyah(){
    audioPlayerAyah.load();
    audioPlayerAyah.play();
}
function stopAudioAyah(){
    audioPlayerAyah.pause();
    audioPlayerAyah.currentTime = 0;
}


let baby = document.getElementById("baby");
var audioPlayerBaby = document.getElementById('baby-AP');

function openSongBaby(){
    baby.classList.add("open-song");
}
function closeSongBaby(){
    baby.classList.remove("open-song");
}
function loadSongBaby(){
    audioPlayerBaby.load();
    audioPlayerBaby.play();
}
function stopAudioBaby(){
    audioPlayerBaby.pause();
    audioPlayerBaby.currentTime = 0;
}


let dedap = document.getElementById("dedap");
var audioPlayerDedap = document.getElementById('dedap-AP');

function openSongDedap(){
    dedap.classList.add("open-song");
}
function closeSongDedap(){
    dedap.classList.remove("open-song");
}
function loadSongDedap(){
    audioPlayerDedap.load();
    audioPlayerDedap.play();
}
function stopAudioDedap(){
    audioPlayerDedap.pause();
    audioPlayerDedap.currentTime = 0;
}


let syaikhona = document.getElementById("syaikhona");
var audioPlayerSyaikhona = document.getElementById('syaikhona-AP');

function openSongSyaikhona(){
    syaikhona.classList.add("open-song");
}
function closeSongSyaikhona(){
    syaikhona.classList.remove("open-song");
}
function loadSongSyaikhona(){
    audioPlayerSyaikhona.load();
    audioPlayerSyaikhona.play();
}
function stopAudioSyaikhona(){
    audioPlayerSyaikhona.pause();
    audioPlayerSyaikhona.currentTime = 0;
}


let lagu = document.getElementById("lagu");
var audioPlayerLagu = document.getElementById('lagu-AP');

function openSongLagu(){
    lagu.classList.add("open-song");
}
function closeSongLagu(){
    lagu.classList.remove("open-song");
}
function loadSongLagu(){
    audioPlayerLagu.load();
    audioPlayerLagu.play();
}
function stopAudioLagu(){
    audioPlayerLagu.pause();
    audioPlayerLagu.currentTime = 0;
}


let merbau = document.getElementById("merbau");
var audioPlayerMerbau = document.getElementById('merbau-AP');

function openSongMerbau(){
    merbau.classList.add("open-song");
}
function closeSongMerbau(){
    merbau.classList.remove("open-song");
}
function loadSongMerbau(){
    audioPlayerMerbau.load();
    audioPlayerMerbau.play();
}
function stopAudioMerbau(){
    audioPlayerMerbau.pause();
    audioPlayerMerbau.currentTime = 0;
}


let patah = document.getElementById("patah");
var audioPlayerPatah = document.getElementById('patah-AP');

function openSongPatah(){
    patah.classList.add("open-song");
}
function closeSongPatah(){
    patah.classList.remove("open-song");
}
function loadSongPatah(){
    audioPlayerPatah.load();
    audioPlayerPatah.play();
}
function stopAudioPatah(){
    audioPlayerPatah.pause();
    audioPlayerPatah.currentTime = 0;
}


let rayuan = document.getElementById("rayuan");
var audioPlayerRayuan = document.getElementById('rayuan-AP');

function openSongRayuan(){
    rayuan.classList.add("open-song");
}
function closeSongRayuan(){
    rayuan.classList.remove("open-song");
}
function loadSongRayuan(){
    audioPlayerRayuan.load();
    audioPlayerRayuan.play();
}
function stopAudioRayuan(){
    audioPlayerRayuan.pause();
    audioPlayerRayuan.currentTime = 0;
}


let sampai = document.getElementById("sampai");
var audioPlayerSampai = document.getElementById('sampai-AP');

function openSongSampai(){
    sampai.classList.add("open-song");
}
function closeSongSampai(){
    sampai.classList.remove("open-song");
}
function loadSongSampai(){
    audioPlayerSampai.load();
    audioPlayerSampai.play();
}
function stopAudioSampai(){
    audioPlayerSampai.pause();
    audioPlayerSampai.currentTime = 0;
}


let satu = document.getElementById("satu");
var audioPlayerSatu = document.getElementById('satu-AP');

function openSongSatu(){
    satu.classList.add("open-song");
}
function closeSongSatu(){
    satu.classList.remove("open-song");
}
function loadSongSatu(){
    audioPlayerSatu.load();
    audioPlayerSatu.play();
}
function stopAudioSatu(){
    audioPlayerSatu.pause();
    audioPlayerSatu.currentTime = 0;
}


let seandainya = document.getElementById("seandainya");
var audioPlayerSeandainya = document.getElementById('seandainya-AP');

function openSongSeandainya(){
    seandainya.classList.add("open-song");
}
function closeSongSeandainya(){
    seandainya.classList.remove("open-song");
}
function loadSongSeandainya(){
    audioPlayerSeandainya.load();
    audioPlayerSeandainya.play();
}
function stopAudioSeandainya(){
    audioPlayerSeandainya.pause();
    audioPlayerSeandainya.currentTime = 0;
}


let tanpa = document.getElementById("tanpa");
var audioPlayerTanpa = document.getElementById('tanpa-AP');

function openSongTanpa(){
    tanpa.classList.add("open-song");
}
function closeSongTanpa(){
    tanpa.classList.remove("open-song");
}
function loadSongTanpa(){
    audioPlayerTanpa.load();
    audioPlayerTanpa.play();
}
function stopAudioTanpa(){
    audioPlayerTanpa.pause();
    audioPlayerTanpa.currentTime = 0;
}


