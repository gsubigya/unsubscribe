/**
 * Automates the process of unsubscribing from all visible channels on the YouTube subscriptions page.
 * Intended for personal use only. Run in browser dev tools console on the Subscriptions > Manage page.
 */

(async function bulkUnsubscribe() {
  // Delay (in ms) between each unsubscribe to avoid being flagged for automation.
  const UNSUBSCRIBE_DELAY = 2000;

  /**
   * Utility function to delay execution.
   * @param {Function} fn - The function to execute after delay.
   * @param {number} delay - Delay in milliseconds.
   * @returns {Promise<void>}
   */
  const runWithDelay = (fn, delay) => new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, delay);
  });

  // Grab all channel rows from the subscription management page.
  const channelElements = Array.from(document.querySelectorAll('ytd-channel-renderer'));

  console.log(`🔍 Found ${channelElements.length} subscribed channels.`);

  let unsubscribedCount = 0;

  for (const channelElement of channelElements) {
    try {
      // Find the "Unsubscribe" button using aria-label that begins with 'Unsubscribe from'
      const unsubscribeButton = channelElement.querySelector('[aria-label^="Unsubscribe from"]');

      if (!unsubscribeButton) {
        console.warn('⚠️ Unsubscribe button not found for a channel. Skipping...');
        continue;
      }

      // Click the "Unsubscribe" button to open the confirmation dialog
      unsubscribeButton.click();

      await runWithDelay(() => {
        // Find the confirmation dialog
        const dialog = document.querySelector('yt-confirm-dialog-renderer');

        if (!dialog) {
          console.warn('⚠️ Confirmation dialog not found. Skipping...');
          return;
        }

        // Click the confirm button inside the dialog
        const confirmButton = dialog.querySelector('#confirm-button');

        if (confirmButton) {
          confirmButton.click();
          unsubscribedCount++;
          console.log(`✅ Unsubscribed ${unsubscribedCount}/${channelElements.length}`);
        } else {
          console.warn('⚠️ Confirm button not found in dialog.');
        }
      }, UNSUBSCRIBE_DELAY);

    } catch (error) {
      console.error('❌ Error while unsubscribing:', error);
    }
  }

  console.log(`🎉 Finished unsubscribing from ${unsubscribedCount} channels.`);
})();
