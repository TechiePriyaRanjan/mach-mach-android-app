export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';
  return '';
};

export const phoneValidator = phone => {
  // const phoneNumberRegex = \+?\d[\d -]{8,12}\d;
  const phoneNumberRegex = /^[6-9]{1}([0-9]){9}$/;
  if (!phone || phone.length <= 0) return 'Phone cannot be empty.';
  if (!phoneNumberRegex.test(phone)) return 'Please enter a valid phone number';
  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';
  return '';
};

export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;
  if (!email || email.length <= 0) return 'Phone cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid phon address.';

  return '';
};

