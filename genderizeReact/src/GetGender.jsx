export const getGender = async (name) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();
    if (data.gender) {
      return data.gender;
    }
    
    return null;
};
  
