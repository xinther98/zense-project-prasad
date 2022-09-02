const defaultFilters = [
	"*://*.learn.iiitb.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exam.iiitb.net/*",
	"*://*.quantserve.com/*",
	"*://*.youtube.com/*",
	"*://*.zedo.com/*",
	"*://*.github.com/*",
	"*://outlook.office.com/people/*",
	"*://web.whatsapp.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)