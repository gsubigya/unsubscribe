# 📺 YouTube Bulk Unsubscribe Script

This is a simple, browser-based automation script that helps you **bulk unsubscribe from YouTube channels** directly from the subscriptions management page. If you're subscribed to hundreds (or even thousands) of channels and want to declutter your feed, this script can save you hours of clicking.

## 🚀 What It Does

- Automatically finds all your subscribed channels on the YouTube [Manage Subscriptions](https://www.youtube.com/feed/channels) page.
- Clicks the **Unsubscribe** button for each channel.
- Confirms the unsubscribe action in the popup dialog.
- Waits a short delay between actions to avoid triggering spam detection or rate limits.

All of this happens **right in your browser**, with no need for extensions or third-party tools.

## 📋 How to Use

> ⚠️ **Use responsibly!** Automating interactions with websites can sometimes go against terms of service. This script is for personal, educational use only.

1. Open [YouTube Subscriptions Management](https://www.youtube.com/feed/channels).
2. Press `F12` or `Ctrl+Shift+I` to open the Developer Tools.
3. Go to the **Console** tab.
4. Paste the script from [`unsubscribe.js`](./unsubscribe.js) into the console and press `Enter`.
5. Watch as it unsubscribes from all visible channels one by one!

## 🛠️ Customization

You can adjust the delay between each unsubscribe (default is 2000ms) to be faster or slower, depending on your preference:

```js
const UNSUBSCRIBE_DELAY = 2000; // Change this to 1000 or 3000, etc.
