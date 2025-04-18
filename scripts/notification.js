// Function to show notification
function showNotification(type, message) {
    const notificationContainer = document.getElementById('notification-container');
    
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'p-4', 'mb-4', 'w-80', 'flex', 'items-center', 'space-x-4', 'transition-transform', 'transform');
    
    // Add different styles based on notification type
    switch(type) {
      case 'success':
        notification.classList.add('border-green-500', 'text-green-700');
        break;
      case 'error':
        notification.classList.add('border-red-500', 'text-red-700');
        break;
      case 'info':
        notification.classList.add('border-blue-500', 'text-blue-700');
        break;
      default:
        notification.classList.add('border-gray-500', 'text-gray-700');
    }
  
    // Create icon based on notification type
    const icon = document.createElement('span');
    icon.classList.add('text-xl');
    if (type === 'success') icon.innerHTML = '✔️';
    if (type === 'error') icon.innerHTML = '❌';
    if (type === 'info') icon.innerHTML = 'ℹ️';
    
    // Create message text
    const messageText = document.createElement('span');
    messageText.classList.add('text-sm');
    messageText.innerHTML = message;
  
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✖️';
    closeButton.classList.add('ml-auto', 'text-sm', 'text-gray-500', 'hover:text-gray-700', 'focus:outline-none');
    closeButton.onclick = () => {
      notification.remove();
    };
  
    // Append elements to notification
    notification.appendChild(icon);
    notification.appendChild(messageText);
    notification.appendChild(closeButton);
  
    // Show notification
    notificationContainer.appendChild(notification);
  
    // Auto-hide the notification after 5 seconds
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
  
