var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-160652049-1"]);
_gaq.push(["_trackPageview"]);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src = "https://ssl.google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();

chrome.browserAction.onClicked.addListener(function () {
  chrome.browserAction.setBadgeText({ text: "" });
  localStorage.setItem("$journal_unread_count", "0");
  chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});

const contextId = "journal-add-item";

chrome.contextMenus.create({
  id: contextId,
  title: "Add to Journal",
  contexts: ["selection", "image", "video", "audio"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == contextId) {
    addMediaItem(info, tab);
  }
});

async function addMediaItem(info, tab) {
  const type = info.mediaType || "text";
  const name = getName(info);
  const source = info.srcUrl;
  const pageSource = info.pageUrl;
  const content = await getContent(info, type);
  const tags = [];

  const result = await window.MediaStore.add({
    type,
    name,
    source,
    pageSource,
    content,
    tags,
  });
  let current = localStorage.getItem("$journal_unread_count") || "0";
  const next = Number(current) + 1;
  localStorage.setItem("$journal_unread_count", String(next));
  chrome.browserAction.setBadgeBackgroundColor({ color: [255, 140, 0, 255] });
  chrome.browserAction.setBadgeText({ text: String(next) });
}

function getName(info) {
  if (info.srcUrl && info.srcUrl.startsWith("http")) {
    const parts = info.srcUrl.split("/");
    return parts[parts.length - 1];
  }
  return "";
}

async function getContent(info, type) {
  if (type === "text") {
    return info.selectionText;
  } else if (type === "image") {
    return getBase64Image(info.srcUrl);
  }
  return undefined;
}

function getBase64Image(imgUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imgUrl;
    img.setAttribute("crossOrigin", "anonymous");
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    };
    img.onerror = (a, b, c, d) => {
      //TODO show a dialog
    };
  });
}
