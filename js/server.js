window.addEventListener("load", () => {
  $.getJSON(url, function (response) {
    const statusDiv = document.getElementById("status");
    statusDiv.innerHTML = null;

    if (!response.online) {
      CreateOfflineStatus(statusDiv);
      return false;
    }

    CreateOnlineStatus(statusDiv, response);
  });
});

function CreateOfflineStatus(statusDiv) {
  const offlineSpan = document.createElement("SPAN");
  offlineSpan.classList.add("offline");
  offlineSpan.innerText = "Server Offline";
  statusDiv.appendChild(offlineSpan);

  const faqSpan = document.createElement("SPAN");
  faqSpan.classList.add("faq");
  faqSpan.innerHTML = "Why? <a href='/faq.html'>FAQ</a>";
  statusDiv.appendChild(faqSpan);
}

function CreateOnlineStatus(statusDiv, status) {
  const mapTabLink = document.querySelector(".maptab");
  mapTabLink.style.display = "flex";

  const softwareDiv = document.createElement("DIV");
  softwareDiv.classList.add("software");
  softwareDiv.innerHTML = `<b>${status.version}</b> (${status.software})`;
  statusDiv.appendChild(softwareDiv);

  const motdDiv = document.createElement("DIV");
  motdDiv.classList.add("motd");
  motdDiv.innerHTML = status.motd.html.toString().replace(/,/g, "-");
  statusDiv.appendChild(motdDiv);

  const playersSpan = document.createElement("SPAN");
  playersSpan.innerHTML = `<b>Players Online:</b> ${status.players.online}`;
  statusDiv.appendChild(playersSpan);

  const iconImage = document.getElementById("icon");
  iconImage.src = status.icon;
}
