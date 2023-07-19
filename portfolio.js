// Add a DOMContentLoaded event listener to ensure the code runs after the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the toggle switch and the icon container
   const toggleSwitch = document.getElementById('toggleSwitch'); 
  
    // Add an event listener to the toggle switch
    toggleSwitch.addEventListener('change', () => {
      // Toggle the background color based on the switch state
      document.body.style.backgroundColor = toggleSwitch.checked ? 'black' : 'white';
  
      // Toggle the visibility of the moon and sun icons
      document.getElementById('moonIcon').style.display = toggleSwitch.checked ? 'block' : 'none';
      document.getElementById('sunIcon').style.display = toggleSwitch.checked ? 'none' : 'block';
    });
  });
  