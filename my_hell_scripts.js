async function updateVersion() {
    const windowsp = document.getElementById("windowsp");
    const version = await getLatestName(); // Ждем результат
    windowsp.innerHTML = `64-bit · Версия ${version}`;
}

updateVersion()

async function getUrlDownload(os = "windows") {
    const url_latest = "https://api.github.com/repos/whcreating/inlauncher/releases/latest";
    var response = await fetch(url_latest);
    var data = await response.json();

    for(const i of data.assets) {
        if(i.name === "inlauncher-setup.exe") {
            window.open(i.browser_download_url, '_blank');
        }
    }

}

async function getLatestName() {
    const url_latest = "https://api.github.com/repos/whcreating/inlauncher/releases/latest";
    var response = await fetch(url_latest);
    var data = await response.json();

    return data.name;
}