

const clearFields = () => {
    const memberIdField = document.getElementById('memberNumber');
    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const roadNameField = document.getElementById('roadName');
    const emailField = document.getElementById('email');
    const addressField = document.getElementById('address');
    const cityField = document.getElementById('city');
    const stateField = document.getElementById('state');
    const zipField = document.getElementById('zip');
    const homePhoneField = document.getElementById('homePhone');
    const cellPhoneField = document.getElementById('cellPhone');
    const iceNameField = document.getElementById('iceName');
    const icePhoneField = document.getElementById('iceNumber');

    memberIdField.value = '';
    firstNameField.value = '';
    lastNameField.value = '';
    roadNameField.value = '';
    emailField.value = '';
    addressField.value = '';
    cityField.value = '';
    stateField.value = '';
    zipField.value = '';
    homePhoneField.value = '';
    cellPhoneField.value = '';
    iceNameField.value = '';
    icePhoneField.value = '';
}