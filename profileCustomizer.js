// Wait for the Roblox profile container to load completely
const checkProfileInterval = setInterval(() => {
    const profileHeader = document.querySelector('.profile-header');
    
    if (profileHeader) {
        clearInterval(checkProfileInterval);
        injectCustomProfileDetails(profileHeader);
    }
}, 500);

function injectCustomProfileDetails(targetContainer) {
    // 1. Create a container for your customization details
    const customSection = document.createElement('div');
    customSection.className = 'custom-rovalra-details';
    customSection.style.marginTop = '15px';
    customSection.style.padding = '15px';
    customSection.style.backgroundColor = '#232527';
    customSection.style.borderRadius = '8px';
    customSection.style.border = '1px solid #393b3d';

    // 2. Add extra fields inside the profile box
    customSection.innerHTML = `
        <h3 style="color: #fff; margin-bottom: 5px; font-size: 16px;">RoValra Custom Profile</h3>
        <p style="color: #b8b8b8; font-size: 14px; margin: 0;">
            <strong>Custom Title:</strong> Profile Customizer Active <br>
            <strong>Status:</strong> Editor Mode
        </p>
    `;

    // 3. Inject it onto the page
    targetContainer.appendChild(customSection);
}
