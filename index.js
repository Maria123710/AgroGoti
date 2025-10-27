document.addEventListener('DOMContentLoaded', () => {
  // Select all links and all content areas using common classes
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  // Hides ALL tab content sections
  function hideAllContent() {
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
  }

  // Removes active styling from ALL tab links
  function deactivateAllTabs() {
    tabLinks.forEach(link => {
      link.classList.remove('tab-active');
      link.classList.remove('text-green-600');
      link.classList.add('text-gray-700');
    });
  }

  // Attach click listener to every tab link
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Stop the browser from navigating

      // 1. Get the target ID from the href attribute (e.g., "#overview-content" -> "overview-content")
      const targetId = link.getAttribute('href').substring(1);
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        // 2. Perform the global reset
        hideAllContent();
        deactivateAllTabs();

        // 3. Activate the current tab and content
        targetContent.classList.remove('hidden');
        link.classList.add('tab-active', 'text-green-600');
        link.classList.remove('text-gray-700');
      }
    });
  });

  // Set Initial State on Load
  // This ensures the page loads with the correct tab selected, even if the user removes the classes from HTML
  const initialTab = document.getElementById('tab-overview');
  const initialContent = document.getElementById('overview-content');

  if (initialTab && initialContent) {
    // Reset everything first
    hideAllContent();
    deactivateAllTabs();

    // Set the intended initial state for the 'Overview' tab
    initialTab.classList.add('tab-active', 'text-green-600');
    initialTab.classList.remove('text-gray-700');
    initialContent.classList.remove('hidden');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all tab links and all tab content sections
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  // Function to hide all tab content sections
  function hideAllContent() {
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
  }

  // Function to deactivate (un-style) all tab navigation links
  function deactivateAllTabs() {
    tabLinks.forEach(link => {
      link.classList.remove('tab-active'); // Remove custom active class
      link.classList.remove('text-green-600'); // Remove active text color
      link.classList.add('text-gray-700');    // Add default text color
    });
  }

  // Add click event listener to each tab navigation link
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor link behavior (page jump)

      // Get the ID of the content div from the href attribute
      // e.g., "#rice-content" becomes "rice-content"
      const targetId = link.getAttribute('href').substring(1);
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        // 1. Hide all content sections
        hideAllContent();
        // 2. Deactivate all tab links
        deactivateAllTabs();

        // 3. Show the target content section
        targetContent.classList.remove('hidden');
        // 4. Activate (style) the clicked tab link
        link.classList.add('tab-active', 'text-green-600');
        link.classList.remove('text-gray-700'); // Ensure default text color is removed
      }
    });
  });

  // --- Set Initial State on Page Load ---
  // This ensures the first tab ('Rice') is correctly displayed and styled
  const initialTab = document.getElementById('tab-rice'); // ID of the default active tab link
  const initialContent = document.getElementById('rice-content'); // ID of the default active content

  if (initialTab && initialContent) {
    hideAllContent();      // Hide all content first
    deactivateAllTabs();   // Deactivate all tabs first

    // Then set the desired initial state for the default tab
    initialTab.classList.add('tab-active', 'text-green-600');
    initialTab.classList.remove('text-gray-700');
    initialContent.classList.remove('hidden');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all tab links and all tab content sections
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  // Function to hide all tab content sections
  function hideAllContent() {
    tabContents.forEach(content => {
      content.classList.add('hidden');
    });
  }

  // Function to deactivate (un-style) all tab navigation links
  function deactivateAllTabs() {
    tabLinks.forEach(link => {
      link.classList.remove('tab-active'); // Remove custom active class
      link.classList.remove('text-green-600'); // Remove active text color
      link.classList.add('text-gray-700');    // Add default text color
    });
  }

  // Add click event listener to each tab navigation link
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor link behavior (page jump)

      // Get the ID of the content div from the href attribute
      // e.g., "#fintech-content" becomes "fintech-content"
      const targetId = link.getAttribute('href').substring(1);
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        // 1. Hide all content sections
        hideAllContent();
        // 2. Deactivate all tab links
        deactivateAllTabs();

        // 3. Show the target content section
        targetContent.classList.remove('hidden');
        // 4. Activate (style) the clicked tab link
        link.classList.add('tab-active', 'text-green-600');
        link.classList.remove('text-gray-700'); // Ensure default text color is removed
      }
    });
  });

  // --- Set Initial State on Page Load ---
  // This ensures the first tab ('FinTech') is correctly displayed and styled
  const initialTab = document.getElementById('tab-fintech'); // ID of the default active tab link
  const initialContent = document.getElementById('fintech-content'); // ID of the default active content

  if (initialTab && initialContent) {
    hideAllContent();      // Hide all content first
    deactivateAllTabs();   // Deactivate all tabs first

    // Then set the desired initial state for the default tab
    initialTab.classList.add('tab-active', 'text-green-600');
    initialTab.classList.remove('text-gray-700');
    initialContent.classList.remove('hidden');
  }
});